import {generateMnemonic, mnemonicToSeedSync} from 'bip39';

//generate a 12 word mnemonic

const mnemonic = generateMnemonic();
console.log('Generated Mnemonic',mnemonic);
const seed = mnemonicToSeedSync(mnemonic);