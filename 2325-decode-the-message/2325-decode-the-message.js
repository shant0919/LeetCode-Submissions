/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let map = new Map();
    let index = 0;
    for(let i=0;i<key.length;i++){  
        if(key[i] === " "){
            continue;
        }
        if(!map.has(key[i])){
            map.set(key[i], String.fromCharCode(97 + index));
            index++;
        }
    }

    let decode = "";
    for(let c of message){
        if(c === " "){
            decode += " "; 
        } else {
            decode += map.get(c);
        }
    }
    return decode;
};