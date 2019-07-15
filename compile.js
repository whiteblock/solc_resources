//compile.js
const path = require('path');
const fs = require('fs');
const solc = require('solc');
const contractName = process.argv[2].split('.')[0];
const helloWorldPath = path.resolve(__dirname, process.argv[2]);
const input = fs.readFileSync(helloWorldPath);
const output = solc.compile(input.toString().toLowerCase(), 1);
const bytecode = output.contracts[':'+contractName].bytecode;
const abi = JSON.parse(output.contracts[':'+contractName].interface);
module.exports = {abi, bytecode};
