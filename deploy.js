//deploy.js
const args = require('/eth2/smartcontracts/deploymentArgs.json');
const Web3 = require('web3');
const abi = args.abi;
const bytecode = args.bytecode;
const web3 = new Web3(new Web3.providers.HttpProvider("http://"+process.argv[1].toString()+":8545"));
const deploy = async () => {
    try {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);
	const result = await new web3.eth.Contract(abi).deploy({ data: '0x' + bytecode}).send({ gas: '1000000', from: accounts[0] });
	console.log('Contract deployed to', result.options.address);
    } catch(err) {
	console.log(err);
    }
};
deploy();
