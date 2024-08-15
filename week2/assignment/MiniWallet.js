require('dotenv').config();

const Web3 = require('web3');
const bip39 = require('bip39');
const crypto = require('crypto');
const apikey = process.env['apikey'];
const network = 'sepolia';

const node = `https://go.getblock.io/${apikey}`
console.log("Node URL",node);
const web3 =  new Web3(new Web3.providers.HttpProvider(node));
//console.log(web3);


web3.eth.getBlockNumber()
  .then(blockNumber => console.log("Latest block number:", blockNumber))
  .catch(error => console.error("Connection error:", error));
const createAccountWithMnemonic=(privateKey)=>{
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const entropy = crypto.createHash('sha256').update(privateKey).digest();
    const mnemonic = bip39.entropyToMnemonic(entropy);
    return {account,mnemonic};
}

const accountTo = web3.eth.accounts.create();
//console.log(accountTo);
//console.log(accountTo.address);

const privateKey= process.env['privateKey'];
const {account:accountFrom,mnemonic} = createAccountWithMnemonic(privateKey);
console.log("Account From",accountFrom);
console.log("Mnemonic:",mnemonic);
const createSignedTx = async(rawTx)=>{
    rawTx.gas = await web3.eth.estimateGas(rawTx);
    return await accountFrom.signTransaction(rawTx);
}

const sendSignedTx = async(signedTx)=>{
    web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(console.log);
}
const amountTo = "0.01";
const rawTx = {
    to:accountTo.address,
    value:web3.utils.toWei(amountTo,"ether")
}

createSignedTx(rawTx).then(sendSignedTx);