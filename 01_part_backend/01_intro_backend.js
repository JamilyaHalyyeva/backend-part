/**
 * default export 
 * named export 
 * 
 * default import 
 * named import 
 */

//defaulr import
//import something from somewhere 
// const something= require('somewhere')

const anything = require("./02_default_export");
console.log(" ~anything: ", anything);

const arrowexport= require("./02_default_export" );
console.log("export arrow function");

arrowexport();

const named_import=require("./03_named_export");
console.log("named_import:", named_import)

const {add, someArray, someobject}= require("./03_named_export");
console.log("named import version 2:" ,add, someArray,someobject);