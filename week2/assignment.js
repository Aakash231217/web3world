const bs58 = require('bs58');
let uint8Array = new Uint8Array([8,10,63,12,129]);
uint8Array[1] = 300;
console.log(uint8Array);


//base64

const uint8Array2 = new Uint8Array([72,101,107,197,111]);
const base64Encoded = Buffer.from(uint8Array2).toString("base64");
console.log(base64Encoded);

//base58->encode
function uint8ArrayToBase58(uint8Array3){
    return bs58.encode(uint8Array3);
}

const byteArray = new Uint8Array([72,101,108,108,111]);
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String);