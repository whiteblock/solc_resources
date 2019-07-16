//deploy.js
const args = require('/eth2/smartcontracts/deploymentArgs.json');
const Web3 = require('web3');
const abi = JSON.parse(args.abi);
const bytecode = args.bytecode.replace(/(\r\n|\n|\r)/gm, "");
const IP = process.argv[2].toString();

const web3 = new Web3(new Web3.providers.HttpProvider("http://"+IP+":8545"));
const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);
        const result = await new web3.eth.Contract(abi).deploy({ data: bytecode }).send({ gas: '2350000', from: accounts[0] });
        console.log('Contract deployed to', result.options.address);
    } catch(err) {
        console.log(err);
    }
};
deploy();
