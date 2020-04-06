/// <reference types="cypress" />
/// <reference types="../support" />
import {
  pageTitle,
  createToDo,
  updateToDo,
  deleteToDoAndVerifyDeletion,
  verifyNetAmount
} from '../page-objects/todo-page'

//@ts-check
describe('Modus Budgeting and Educational React App Test Automation', () => {

  beforeEach(() => {
    // Visit the Base URL which will be fetched from cypress.json file
    cy.visit('/',{timeout:15000})
    /**
     * Disabling ServiceWorkers as they affect end-to-end tests by introducing caching and coupling tests
     * For more details: https://github.com/cypress-io/cypress/issues/702
    **/
    cy.unregisterServiceWorkers

    //Wait to get the success response for the triggered internal XHR request from the application
    cy.server()
    cy.route('/repos/ModusCreateOrg/budgeting').as('request')
    cy.wait('@request').its('status').should('be',200)

    //Verify page Title
    pageTitle('Budgeting App - Educational React App')

  })

  /**
   * End to End Scenario#1:
   * Verify user can able to create a todo
   * Verify the created todo items are populated as expected
   * Verify the total inflow, outflow and balancing amounts are populated as expected after creation
   */
  it('end to end test for create todos', () => {

    //For CategoryType: "Income", Create todo items with the following different combinations of valid data
    //This function:createToDo requires 3 arguments 1)Category 2) Description 3) amount. Please go to the implementation function for more details.
    createToDo("Income", "Addition of Inflow Type 1", 1270000)
    createToDo("Income", "Addition of Inflow Type 2", 1000.542)
    createToDo("Income", "Addition of Inflow Type 3", 0.0000)
    createToDo("Income", "Addition of Inflow Type 4", +1234567)
    createToDo("Income", "Addition of Inflow Type 5", -125600)
    createToDo("Income", "Addition of Inflow Type 6", "$1999.99")
    createToDo("Income", "Addition of Inflow Type 7", "$1,250.54")
    //This function:verifyNetAmount doesn't require any arguments for verify the net amount. Please go to the implementation function for more details
    verifyNetAmount()

    createToDo("Travel", "Addition of Outflow Type 1", 1270000)
    createToDo("Travel", "Addition of Outflow Type 2", 1000.542)
    createToDo("Travel", "Addition of Outflow Type 3", 0.0000)
    createToDo("Travel", "Addition of Outflow Type 4", +1234567)
    createToDo("Travel", "Addition of Outflow Type 5", -125600)
    createToDo("Travel", "Addition of Outflow Type 6", "$1999.99")
    createToDo("Travel", "Addition of Outflow Type 7", "$1,250.54")
    verifyNetAmount()

    //Note: Observed there is a difference of $0.01 in Total Inflow/Outflow amounts while add the following precisions of data(ex: 1.546+1.598)
    // createToDo("Income", "Minor Bug data set1", 1.546)
    // createToDo("Income", "Minor Bug data set1", 1.598)
    // verifyNetAmount()

    // createToDo("Groceries", "Minor Bug data set2", -1.546)
    // createToDo("Groceries", "Minor Bug data set2", -1.576)
    // verifyNetAmount()
  })

  /**
   * End to End Scenario#2:
   * Verify user can able to update a todo
   * Verify the values are updated as expected
   * Verify the total inflow, outflow and balancing amounts are populated as expected after updates
   */
  it('end to end test for update todos', () => {
    //This function:updateToDo requires 4 arguments 1) Row needs to be updated 2) New Category 3) New Description 4) New Amount
    updateToDo(1, "Income", " ", "100")
    updateToDo(1, "Income", "Update the row#1", 15006.56)
    //This function:verifyNetAmount doesn't require any arguments for verify the net amount. Please go to the implementation function for more details.
    verifyNetAmount()

    updateToDo(2, "Groceries", "Update the row#2", -12500.00)
    verifyNetAmount()

    //Failure test data scenario: 
    // During the update process, the amount field of the Inflow category("Income") is updated with negative values (ex:-$1.50) and which should be handled as like create to-dos.
    // The same also applicable to Outflow category(ex: Groceries), where it's amount field is able to update with the positive values (ex: $1.50) and which is not expected.
    updateToDo(3, "Income", "Update the row#3", -1.5456)
    verifyNetAmount()

    updateToDo(4, "Travel", "Update the row#4", 125.00)
    verifyNetAmount()
  })

  /**
   * End to End Scenario#3:
   * Verify user can able to delete a todo
   * Verify the record is successfully deleted
   * Verify the total inflow, outflow and balancing amounts are populated as expected after deletion
   */

  it('end to end test for delete todos', () => {
    //This function:deleteToDoAndVerifyDeletion requires only one argument that a number denotes which row needs to be deleted. 
    deleteToDoAndVerifyDeletion(1)
    deleteToDoAndVerifyDeletion(3)
    //This function:verifyNetAmount doesn't require any arguments for verify the net amount. Please go to the implementation function for more details.
    verifyNetAmount()
  })


  after(() => {
    cy.unregisterServiceWorkers
  })

})