//NPM - global comman, comes with node 
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac>)


// will user more local dependency because even though yyou can install packages globally with arrival of NPX theres actually less and 
//less need for setting up something globally thats why well focus on local dependencies first. 

//package.json - manifest file (stores important info about project/packages)
//manual approach (create package.json in the root, create proerties etc)

//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

//flat and deep method, arrays of arrays, the items are arrays
const items = [1,[2,[3,[4]]]]

//flat and deep method
const newItems = _.flattenDeep(items)
console.log(newItems);

