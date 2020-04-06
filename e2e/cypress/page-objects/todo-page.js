/// <reference types="cypress" />

const expectedFormattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

const currencyStringToDouble = (userInput) => userInput.toString().replace(/[^0-9.-]+/g, "")

/**
 * This function: pageTitle helps to verify the page title of the application 
 * @param {*} title: The expected string title
 */
export function pageTitle(title) {
    cy.title().should('eq', title)
}

/**
 * This function: createToDo helps to feed the data into application
 * @param {*} category : 
 * There are totally 17 categories are available and they are mainly classified into 2 types as blow:
 * 1) Inflow type(=>currently we have only one inflow category in the application which is "Income")
 * 2) OutFlow type(=>any other than type: "Income"(ex: Groceries))
 * List of all categories: 
 * 'Beauty', 'Car', 'Clothing', 'Commute', 'Entertainment', 'Gifting', 'Groceries', 
 * 'Health', 'Home', 'Income', 'Insurance', 'Kids', 'Misc', 'School', 'Taxes', 'Travel', 'Utensils'
 * @param {*} description : Any Values
 * @param {*} amount : Valid values: signed/un-signed integers/float numbers(ex: 1.25,+1.25,-1.25,0,5)
 */
export function createToDo(category, description, amount) {
    cy.log("Select the Category: " + category)
    cy.get('select', { timeout: 7000 }).focus().select(category)

    cy.log("Type the Description: " + description)
    cy.get(':nth-child(2) > input').
        should('have.attr', 'placeholder', 'Description').
        type(description)

    cy.log("Type the amount: " + amount)
    cy.get(':nth-child(3) > input').
        should('have.attr', 'placeholder', 'Value').
        type(amount)

    cy.log("Click the Add Button")
    cy.get('.submit').contains('Add').click()

    cy.log("Call to another helper function: verifyCreatedToDoItem with the given input data from the user")
    verifyCreatedToDoItem(category, description, amount)
}

/**
 * This function: verifyCreatedToDoItem is called from the fn:createToDo
 * Note: In application, the newly created record should be always latest record in the table
 * @param {*} category: The same input used in previous function:createToDo
 * @param {*} description: The same input used from previous function:createToDo
 * @param {*} amount: The same input used from previous function:createToDo
 */
function verifyCreatedToDoItem(category, description, amount) {

    //Convert the given amount to number format(just to handle the unknown negative cases(ex: String type "$1.56") 
    const num_amount = currencyStringToDouble(amount)

    cy.log("Verify the last row in the table")
    cy.get('table > tbody > tr').last().as("lastRow")

    cy.log("Verify the category data in the last record")
    cy.get("@lastRow").find('._3-t-g').first().should('have.text', category)

    cy.log("Verify the description data in the last record")
    cy.get("@lastRow").find('td .Zf1nY').contains('Description').next().
        should('have.text', description)

    cy.log("Verify the amount value in the last record")
    cy.get("@lastRow").find('._3-t-g').last().then(($amountToVerify) => {
        cy.log("Call goes to another helper function to validate the amount field in the application")
        verifyChangedAmount(num_amount, category, $amountToVerify)
    })
}

/**
 * This function: updateToDo helps to update the existing item in the table
 * @param {*} rowIndex: Which Row needs to be updated
 * @param {*} category: The new category to be updated(refer valid types in the fn: createToDo)
 * @param {*} description: The new description to be updated
 * @param {*} amount: The new amount to be updated
 */
export function updateToDo(rowIndex, category, description, amount) {
    //Just to know how many records are in the table
    cy.get('tbody tr', { timeout: 7000 }).then(row => {
        const rowCount = row.length;
        cy.log("Total no of rows in the table " + rowCount)
    })

    cy.log("Click the table row :" + rowIndex + " to be updated")
    cy.get(`tbody > tr:nth-child(${rowIndex})`, { timeout: 8000 }).click()

    //In production, the application doesn't show the category even after click the particular row to make changes
    //In this case, we may try to reload the page until the element is visible
    //A similar work around: https://stackoverflow.com/questions/54216559/cypress-check-if-element-exists-without-exception

    cy.log("Modify the category")
    cy.get('tbody div:nth-child(1) > select', { timeout: 10000 }).select(category)

    cy.log("Modify the description")
    cy.get('tbody div:nth-child(2) > input').clear().type(description)

    cy.log("Modify the amount")
    cy.get('tbody div:nth-child(3) > input').clear().type(amount, { delay: 1 })

    cy.log("Verify the visibility Cancel button")
    cy.get('.cancel').contains('Cancel').
        should('be.enabled').
        should('have.css', 'background-color', 'rgb(117, 117, 117)')

    cy.log("Verify the Delete button")
    cy.get('.delete').contains('Delete').
        should('be.enabled').
        should('have.css', 'background-color', 'rgb(227, 21, 21)')

    cy.log("Verify the Update button & Click it!")
    cy.get('tbody div:nth-child(4) > .submit').contains('Update').should('be.enabled').
        should('have.css', 'background-color', 'rgb(20, 135, 39)').
        click({ force: true })

    cy.log("Call to another helper function: verifyUpdatedTodDoItem with the given input data from the user")
    verifyUpdatedTodDoItem(rowIndex, category, description, amount)
}

/**
 * This function is called from the fn:updateToDo
 * @param {*} rowIndex: Expected row to do updated from the fn:updateToDo
 * @param {*} category: Expected category to be updated from the fn:updateToDo
 * @param {*} description: Expected description to be updated from the fn:updateTo
 * @param {*} amount: Expected amount to be updated from the fn:updateToDo
 */
function verifyUpdatedTodDoItem(rowIndex, category, description, amount) {
    //Convert the given amount to number format(just to handle the unknown negative cases(ex: String type "$1.56") 
    const num_amount = currencyStringToDouble(amount)

    cy.log("Verify the updated row#: " + rowIndex)
    cy.get(`tr:nth-child(${rowIndex}) ._3-t-g`, { timeout: 7000 }).should('have.length', 3).then(($ele) => {
        expect($ele.eq(0)).to.have.text(category)
        expect($ele.eq(1)).to.have.text(description)
        cy.get($ele.eq(2)).then(($amountToVerify) => {
            cy.log("Call goes to another helper function to validate the amount field in the application")
            verifyChangedAmount(num_amount, category, $amountToVerify)
        })
    })
}

/**
 * This is called from 2 helper functions: 1. verifyCreatedToDoItem 2. verifyUpdatedTodDoItem
 * The Logic is to store the amount value in the application is as below:
 * Inflow Category Type(ex:Income) should hold only positive amount in a currency format (ex: $1,500.50)
 * Outflow Category Type(ex:Travel) which are meant to be expenses should hold the signed negative amount in a currency format (ex: -$1,500.50)
 * Note: $0.00 will be shown in Green color in application
 * @param {*} amount: input amount/expected amount from the user
 * @param {*} category: input category/expected category from the user
 * @param {*} appAmountElement: The amount field in the application
 */
function verifyChangedAmount(amount, category, appAmountElement) {
    //For handle the sign in the amount to be displayed
    if (amount < 0) {
        amount = -1 * amount
    }
    cy.wrap(appAmountElement).then(function ($appAmountElement) {
        cy.log("Verify the amount field")
        if ((category == "Income") || Math.round(amount * 10) == 0) {
            expect($appAmountElement).to.have.css('color', 'rgb(20, 135, 39)')
            expect($appAmountElement.text()).to.eq(expectedFormattedAmount.format(amount))
        } else {
            expect($appAmountElement).to.have.css('color', 'rgb(227, 21, 21)')
            expect($appAmountElement.text()).to.eq("-" + expectedFormattedAmount.format(amount))
        }
    })
}

/**
 * This function: verifyNetAmount helps to validate the amount in TotalInflow, TotalOutflow and Working Balance
 * Logic: 
 * TotalInflow=Sum of all Inflow Amounts in the table(clue: which will be in green color)
 * TotalOutflow=Sum of all Outflow Amounts in the table(clue: which will be in red color)
 * Working Balance=TotalInflow-TotalOutflow
 */
export function verifyNetAmount() {
    //Inflow Amount Calculation
    var inflowAmount = 0;
    var outflowAmount = 0;
    cy.get('._3XkHf > ._3-t-g').should('have.css', 'color', 'rgb(20, 135, 39)').each(($amountElements, index, $list) => {
        inflowAmount += parseFloat(currencyStringToDouble($amountElements.text()))
        if (index == $list.length - 1) {
            cy.log("Total sum of all inflowAmount elements:" + inflowAmount);
            cy.wrap(inflowAmount).as("InflowAmountInNumber")
            const expectedInflowAmount = expectedFormattedAmount.format(inflowAmount)
            cy.get(':nth-child(1) > ._3S2Fs > .sG1fB').
                should('have.css', 'color', 'rgb(20, 135, 39)').
                should('have.text', expectedInflowAmount)
        }
    })
    //Outflow Amount Calculation
    cy.get('.MBPvA > ._3-t-g').should('have.css', 'color', 'rgb(227, 21, 21)').each(($amountElements, index, $list) => {
        outflowAmount += parseFloat(currencyStringToDouble($amountElements.text()))
        if (index == $list.length - 1) {
            cy.log("Total sum of all outflowAmount elements:" + outflowAmount);
            const newOutflowAmount = -1 * outflowAmount
            cy.wrap(newOutflowAmount).as("OutflowAmountInNumber")
            const expectedOutflowAmount = expectedFormattedAmount.format(newOutflowAmount)
            cy.get(':nth-child(3) > ._3S2Fs > .sG1fB').
                should('have.css', 'color', 'rgb(227, 21, 21)').
                should('have.text', expectedOutflowAmount)
        }
    })
    //Balance Amount Calculation
    cy.get("@InflowAmountInNumber").then(function (num1) {
        cy.get("@OutflowAmountInNumber").then(function (num2) {
            const balanceAmount = num1 - num2
            const expectedFormattedBalance = expectedFormattedAmount.format(balanceAmount)
            if (num1 - num2 >= 0) {
                cy.get(':nth-child(5) > ._3S2Fs > .sG1fB').
                    should('have.css', 'color', 'rgb(20, 135, 39)').
                    should('have.text', expectedFormattedBalance)
            } else {
                cy.get(':nth-child(5) > ._3S2Fs > .sG1fB').
                    should('have.css', 'color', 'rgb(227, 21, 21)').
                    should('have.text', expectedFormattedBalance)
            }
        })
    })
}

/**
 * This function: deleteToDoAndVerifyDeletion helps to delete and as well as validate the record is successfully deleted from the application
 * @param {*} rowIndex 
 */
export function deleteToDoAndVerifyDeletion(rowIndex) {

    cy.get('tbody tr', { timeout: 7000 }).then(rows => {
        const rowsCount = rows.length;
        cy.wrap(rowsCount).as("rowsCount")
        cy.log("Total no of rows in the table " + rowsCount)
    })

    //Store the text of the entire row to be deleted
    const getRowText = cy.get(`tbody > tr:nth-child(${rowIndex})`, { timeout: 8000 }).invoke('text')

    cy.log("Click the table row :" + rowIndex + " to be deleted")
    cy.get(`tbody > tr:nth-child(${rowIndex})`, { timeout: 8000 }).click({ force: true })

    cy.log("Click the delete button")
    cy.get('.delete', { timeout: 7000 }).contains('Delete').
        should('be.enabled').
        should('have.css', 'background-color', 'rgb(227, 21, 21)').
        click()

    cy.get("@rowsCount").then(function (oldRowsCount) {
        cy.log("verify the no of rows in a table after deletion")
        cy.get('tbody tr').should('have.length', oldRowsCount - 1)
    })

    cy.get('tbody tr:visible').each(($rowData) => {
        cy.log("verify the record which we wanted to delete is no longer presence in the table")
        const allRowsText = $rowData.text()
        expect(allRowsText).not.to.eq(getRowText)
    })
}