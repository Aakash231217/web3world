let bytes = new Uint8Array([0,255,127,128]);
console.log(bytes);



function asciiToBytes(asciiString){
    const arr = [];
    for(let i=0;i<asciiString.length;i++){
       arr.push(asciiString.charCodeAt(i));
    }
    return new Uint8Array(arr);
}

const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);

//base64
const uint8Array = new Uint8Array([ 72, 101, 108, 108, 111 ]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);


//base 58
// excluding I and O and and l(smallcase) numbers 0 