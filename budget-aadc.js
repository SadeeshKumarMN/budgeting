(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"../node_modules/reselect/lib/index.js":function(e,t,n){"use strict";function r(e,t){return e===t}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,o=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}(t,n,arguments)||(o=e.apply(null,arguments)),n=arguments,o}}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var i=0,c=r.pop(),u=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(r),s=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(n)),l=o(function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return s.apply(null,e)});return l.resultFunc=c,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}t.__esModule=!0,t.defaultMemoize=o,t.createSelectorCreator=a,t.createStructuredSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t,r){return e[n[r]]=t,e},{})})};var i=t.createSelector=a(o)},"./components/Balance/style.scss":function(e,t,n){e.exports={balanceRowContainer:"_3q5mW",balanceRow:"_3eF2Q",balanceWrapper:"jweKH",balanceSymbol:"_2iIP9",balanceItem:"_3S2Fs",balanceAmount:"sG1fB",neg:"_15b6X",pos:"_1yrus",balanceTitle:"zzvVw"}},"./components/BudgetGridRow/style.scss":function(e,t,n){e.exports={cellLabel:"Zf1nY",cellContent:"_3-t-g",neg:"MBPvA",pos:"_3XkHf"}},"./containers/Budget/index.js":function(e,t,n){"use strict";n.r(t);var r=n("../node_modules/react/index.js"),o=n("./modules/transactions.js"),a=n("./modules/categories.js"),i=n("./store/index.js"),c=n("../node_modules/react-redux/es/index.js"),u=n("./selectors/transactions.js"),s=n("./selectors/categories.js"),l=n("../node_modules/prop-types/index.js"),f=n.n(l);function p(e){return e.displayName||e.name||"Component"}var d=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getState=function(){return n.currentState},this.setState=function(e){n.currentState=e,n.subscriptions.forEach(function(e){return e(n.currentState)})},this.subscribe=function(e){return n.subscriptions.push(e),function(){n.subscriptions=n.subscriptions.filter(function(t){return t!==e})}},this.currentState=t,this.subscriptions=[]},m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var h,b,y,v=function(e){return function(t){var n,o,a,i=(o=n=function(n){function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this,e,t));return r.broadcast=new d,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,n),o.prototype.getChildContext=function(){var t;return(t={})[e]=this.broadcast,t},o.prototype.render=function(){return r.createElement(t,m({setBroadcastState:this.broadcast.setState},this.props))},o}(r.Component),n.childContextTypes=((a={})[e]=f.a.object,a),o);return i.displayName="ContextBroadcastProvider("+p(t)+")",i}},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var j=(b=h=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));y.call(r);var o=n.initialValues;if(o){var a=r.getInitialFormState(o);r.setFormState(a)}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getOtherProps=function(){var e=this.props;e.fields,e.validate,e.children,e.setBroadcastState,e.initialValues,e.onFormDataChange,e.onSubmit,e.onSubmitSuccess,e.onSubmitFail;return function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["fields","validate","children","setBroadcastState","initialValues","onFormDataChange","onSubmit","onSubmitSuccess","onSubmitFail"])},t.prototype.setFormState=function(e){var t=this.props.setBroadcastState;this.formState=e;var n=this.getFormData();t(n),this.props.onFormDataChange&&this.props.onFormDataChange(n)},t.prototype.blurAll=function(){var e=this.props.fields.reduce(function(e,t){return e[t]=!0,e},{});this.setFormState(g({},this.formState,{blurred:e}))},t.prototype.runValidator=function(){var e=this.props.validate,t=this.formState.values;return(e||function(){return{}})(t,this.getOtherProps())},t.prototype.render=function(){return r.createElement("form",g({onSubmit:this.submitForm},this.getOtherProps()),this.props.children)},t}(r.Component),h.defaultProps={initialValues:{}},y=function(){var e=this;this.getInitialFormState=function(t){var n=e.props.fields;return{values:n.reduce(function(e,n){var r=Object.keys(t).includes(n);return e[n]=r?t[n]:"",e},{}),blurred:n.reduce(function(e,t){return e[t]=!1,e},{})}},this.getFormData=function(){var t=e.props,n=t.fields,r=t.initialValues,o=e.formState,a=o.values,i=o.blurred,c=e.runValidator(),u=c._error||"",s=0===Object.keys(c).length;return{fields:n.reduce(function(t,n){return t[n]={name:n,value:a[n],initialValue:r?r[n]:void 0,blurred:i[n],error:c[n]||"",onBlur:function(){e.handleBlur(n)},onChange:function(t){e.handleChange(n,t)}},t},{}),error:u,valid:s,initializeForm:e.initializeForm,submitForm:e.submitForm}},this.handleBlur=function(t){var n;e.setFormState(g({},e.formState,{blurred:g({},e.formState.blurred,(n={},n[t]=!0,n))}))},this.handleChange=function(t,n){var r;e.setFormState(g({},e.formState,{values:g({},e.formState.values,(r={},r[t]=n,r))}))},this.initializeForm=function(t){var n=e.getInitialFormState(t);e.setFormState(n)},this.submitForm=function(t){var n=e.props,r=n.onSubmit,o=n.onSubmitSuccess,a=n.onSubmitFail,i=e.formState.values;t&&t.preventDefault();var c=e.runValidator(),u=0===Object.keys(c).length;e.blurAll(),u&&r?(r(i),o&&o()):a&&a()}},b),S=v("formData")(j);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,C,F=function(e){return function(t){var n,o,a,i=(o=n=function(n){function o(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t=O(this,n.call.apply(n,[this].concat(a))),t.state={broadcastState:null},t.updateState=function(e){t.setState({broadcastState:e})},O(t,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,n),o.prototype.componentWillMount=function(){var t=this.context[e];if(!(t instanceof d))throw new Error("consumeContextBroadcast must be rendered in the context of a broadcast with the right name");var n=t.getState();this.updateState(n)},o.prototype.componentDidMount=function(){var t=this.context[e];this.unsubscribe=t.subscribe(this.updateState)},o.prototype.componentWillUnmount=function(){this.unsubscribe()},o.prototype.render=function(){var n,o=this.state.broadcastState,a=w({},this.props,((n={})[e]=o,n));return r.createElement(t,a)},o}(r.Component),n.contextTypes=((a={})[e]=f.a.object,a),o);return i.displayName="ConsumeContextBroadcast("+p(t)+")",i}},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T=(C=E=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=x(this,e.call.apply(e,[this].concat(a))),r.getValue=function(e){if(null===(t=e)||void 0===t||"[object Object]"!==Object.prototype.toString.call(t))return e;var t,n=e.currentTarget;return n?"checkbox"==={target:n}?n.checked||"":n.value:e},r.getFieldData=function(){var e=r.props,t=e.name;return e.formData.fields[t]},r.handleChange=function(e){var t=r.getFieldData();if(t){var n=r.getValue(e);t.onChange(n)}},x(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.component,n=e.name,o=e.handleRef,a=(e.formData,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["component","name","handleRef","formData"])),i=this.getFieldData(),c={name:n,value:void 0!==i.value?i.value:"",onChange:this.handleChange,onBlur:i.onBlur,ref:o},u={blurred:i.blurred,error:i.error,initialValue:i.initialValue};return"string"==typeof t?r.createElement(t,_({},a,c)):t?r.createElement(t,_({},a,c,u)):null},t}(r.Component),E.defaultProps={component:"input",handleRef:null},C),I=F("formData")(T);function P(e){var t=e.name,n=e.value,o=e.data,a=e.onChange;return r.createElement("select",{name:t,value:n,onChange:a},Object.keys(o).map(function(e){return r.createElement("option",{key:e,value:e},o[e])}))}P.defaultProps={name:""};var D,R,N=n("./containers/EntryFormRow/style.scss"),B=n.n(N);function V(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var k=(R=D=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=V(this,e.call.apply(e,[this].concat(a))),r.state={formData:null},r.addEntry=function(e){var t=e.categoryId,n=e.description,o=e.value;r.props.addTransaction({categoryId:t,description:n,value:o})},r.focusValueField=function(){r.valueRef&&r.valueRef.focus()},r.handleSubmitSuccess=function(){var e=r.state.formData;e&&e.initializeForm({categoryId:e.fields.categoryId.value}),r.focusValueField()},r.handleSubmitFail=function(){r.focusValueField()},r.handleValueRefUpdate=function(e){r.valueRef=e},r.handleFormDataChange=function(e){r.setState({formData:e})},V(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,n=e.categories,o={categoryId:e.defaultCategoryId},a=this.state.formData,i=a&&a.valid;return r.createElement("tr",{className:B.a.entryFormRow},r.createElement("td",null,r.createElement(S,{fields:t.formFields,initialValues:o,validate:t.validateForm,onFormDataChange:this.handleFormDataChange,onSubmit:this.addEntry,onSubmitSuccess:this.handleSubmitSuccess,onSubmitFail:this.handleSubmitFail},r.createElement("div",{className:B.a.formSection},r.createElement(I,{component:P,name:"categoryId",data:n})),r.createElement("div",{className:B.a.formSection},r.createElement(I,{component:"input",name:"description",type:"text",placeholder:"Description"})),r.createElement("div",{className:B.a.formSection},r.createElement(I,{component:"input",name:"value",type:"number",placeholder:"Value",handleRef:this.handleValueRefUpdate}),r.createElement("button",{type:"submit",disabled:!i},"Add")))))},t}(r.Component),D.formFields=["categoryId","description","value"],D.validateForm=function(e){var t={};return e.value||(t.value="You must provide a value"),t},R),A={addTransaction:o.a.addTransaction},M=Object(c.b)(function(e){return{defaultCategoryId:Object(s.b)(),categories:Object(s.a)(e)}},A)(k),z=n("./utils/formatAmount.js"),G=n("./components/BudgetGridRow/style.scss"),L=n.n(G),W=function(e){var t=e.transaction,n=e.categories,o=Object(z.a)(t.value),a=o.isNegative?L.a.neg:L.a.pos,i=t.id,c=t.categoryId,u=t.description,s=n[c];return r.createElement("tr",{key:i},r.createElement("td",null,r.createElement("div",{className:L.a.cellLabel},"Category"),r.createElement("div",{className:L.a.cellContent},s)),r.createElement("td",null,r.createElement("div",{className:L.a.cellLabel},"Description"),r.createElement("div",{className:L.a.cellContent},u)),r.createElement("td",{className:a},r.createElement("div",{className:L.a.cellLabel},"Amount"),r.createElement("div",{className:L.a.cellContent},o.text)))},U=n("./containers/BudgetGrid/style.scss"),H=n.n(U);var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.transactions,n=e.categories;return r.createElement("table",{className:H.a.budgetGrid},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Category"),r.createElement("th",null,"Description"),r.createElement("th",null,"Amount"))),r.createElement("tbody",null,t.map(function(e){return r.createElement(W,{key:e.id,transaction:e,categories:n})})),r.createElement("tfoot",null,r.createElement(M,null)))},t}(r.Component),K=Object(c.b)(function(e){return{transactions:Object(u.h)(e),categories:Object(s.a)(e)}})(J),X=n("./components/Balance/style.scss"),Y=n.n(X),q=function(e){var t=e.title,n=e.amount,o=e.colorize,a=e.prefix,i=o&&n.isNegative?Y.a.neg:Y.a.pos||"";return["string"==typeof a&&r.createElement("div",{key:"prefix",className:Y.a.balanceSymbol},a),r.createElement("div",{key:"item",className:Y.a.balanceWrapper},r.createElement("div",{className:Y.a.balanceItem},r.createElement("div",{className:Y.a.balanceAmount+" "+i},n.text),r.createElement("div",{className:Y.a.balanceTitle},t)))]};q.defaultProps={colorize:!0,prefix:null};var Q=q,Z=function(e){var t=e.children;return r.createElement("div",{className:Y.a.balanceRowContainer},r.createElement("div",{className:Y.a.balanceRow},t))};var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.inflow,n=e.outflow,o=e.balance;return r.createElement(Z,null,r.createElement(Q,{amount:t,title:"Total Inflow"}),r.createElement(Q,{amount:n,title:"Total Outflow",prefix:"-"}),r.createElement(Q,{amount:o,title:"Working Balance",colorize:!1,prefix:"="}))},t}(r.Component),ee=Object(c.b)(function(e){return{balance:Object(u.a)(e),inflow:Object(u.b)(e),outflow:Object(u.c)(e)}})($);Object(i.b)({transactions:o.b,categories:a.a});t.default=function(){return r.createElement("section",null,r.createElement(K,null),r.createElement(ee,null))}},"./containers/BudgetGrid/style.scss":function(e,t,n){e.exports={budgetGrid:"opmhI"}},"./containers/EntryFormRow/style.scss":function(e,t,n){e.exports={entryFormRow:"_3Tz1l",formSection:"_3R7ot"}},"./modules/categories.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("./modules/defaults.js");function o(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a}},"./modules/defaults.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a});var r={1:"Groceries",2:"School",3:"Entertainment",4:"Utensils",5:"Kids",6:"Travel",7:"Commute",8:"Insurance",9:"Clothing",10:"Car",11:"Taxes",12:"Health",13:"Home",14:"Beauty",15:"Income",16:"Misc",17:"Gifting"},o=["15"],a=[{id:1,description:"Trader Joe's food",value:-423.34,categoryId:"1"},{id:2,description:"Gas",value:-764.73,categoryId:"6"},{id:3,description:"Ebay sale - guitar",value:1102,categoryId:"15"},{id:4,description:"Milk & Eggs for the pancake party with neighbors",value:-2300,categoryId:"3"},{id:5,description:"The usual weekly run",value:-1100,categoryId:"16"},{id:6,description:"Paycheck",value:5700,categoryId:"15"}]},"./modules/transactions.js":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var r=n("./modules/defaults.js"),o="budget/transaction/ADD",a="budget/transaction/DELETE";function i(e,t){var n=t.categoryId,o=t.description,a=t.value,i=r.c.includes(n)?Math.abs(a):-1*Math.abs(a);return{id:function(e){return e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1}(e),categoryId:n,description:o,value:i}}var c={addTransaction:function(e){return function(t,n){return t({type:o,transaction:i(n().transactions,e)})}},deleteTransaction:function(e){return{type:a,id:e}}};function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.b,t=arguments[1];switch(t.type){case o:return[].concat(e,[t.transaction]);case a:return e.filter(function(e){return e.id!==t.id});default:return e}}},"./selectors/categories.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(e){return e.categories||{}},o=function(){return"16"}},"./selectors/transactions.js":function(e,t,n){"use strict";n.d(t,"i",function(){return u}),n.d(t,"h",function(){return l}),n.d(t,"d",function(){return m}),n.d(t,"f",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return v}),n.d(t,"g",function(){return S}),n.d(t,"e",function(){return w});var r=n("../node_modules/reselect/lib/index.js"),o=n("./utils/formatAmount.js"),a=n("./selectors/categories.js");function i(e){return e.reduce(function(e,t){return e+parseFloat(t.value)},0)}function c(e){return e.reduce(function(e,t){var n=t.categoryId,r=t.value;return(e.find(function(e){return e.categoryId===n})||e[e.push({categoryId:n,value:0})-1]).value+=Math.abs(r),e},[])}var u=function(e){return[].concat(e).sort(function(e,t){return t.value-e.value})},s=function(e,t){return e.map(function(e){return e.category=t[e.categoryId],e})},l=function(e){return e.transactions||[]},f=Object(r.createSelector)([l],function(e){return e.filter(function(e){return e.value>0})}),p=Object(r.createSelector)([l],function(e){return e.filter(function(e){return e.value<0})}),d=Object(r.createSelector)([l],function(e){return i(e)}),m=Object(r.createSelector)([f],function(e){return i(e)}),h=Object(r.createSelector)([p],function(e){return i(e)}),b=Object(r.createSelector)([d],function(e){return Object(o.a)(e,!1)}),y=Object(r.createSelector)([m],function(e){return Object(o.a)(e,!1)}),v=Object(r.createSelector)([h],function(e){return Object(o.a)(e,!1)}),g=Object(r.createSelector)([p],function(e){return c(e)}),j=Object(r.createSelector)([f],function(e){return c(e)}),S=Object(r.createSelector)(g,a.a,function(e,t){return s(e,t)}),w=Object(r.createSelector)(j,a.a,function(e,t){return s(e,t)})},"./utils/formatAmount.js":function(e,t,n){"use strict";function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e<0,r=Math.abs(e).toLocaleString("en-us",{style:"currency",currency:"USD"});return{text:(n&&t?"-":"")+r,isNegative:n}}n.d(t,"a",function(){return r})}}]);