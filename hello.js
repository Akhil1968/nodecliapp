#!/usr/bin/env node 
var cliArgs = process.argv.slice();

console.log(cliArgs[0]);
console.log(cliArgs[1]);
var arg = cliArgs[2];

if (typeof arg == 'undefined'){
	console.log('Hello, Node-CLI');
}else{
 	console.log('Hello, %s!', cliArgs[2]);
}
