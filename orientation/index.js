const crypto = require('crypto');

function findHashwithPrefix(prefix){
    let input = 0;
    while(true){
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input:inputStr, hash:hash};
        }
        input++;
    }
}

const result = findHashwithPrefix('0000');
console.log(`input:${result.input}`);
console.log(`Hash:${result.hash}`);