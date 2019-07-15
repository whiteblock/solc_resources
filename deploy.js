//deploy.js
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');
const web3 = new Web3(new Web3.providers.HttpProvider("http://"+process.argv[3].toString()+":8545"));
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);
	const result = await new web3.eth.Contract(abi).deploy({ data: '0x' + bytecode}).send({ gas: '1000000', from: accounts[0] });
	console.log('Contract deployed to', result.options.address);
};
deploy();
