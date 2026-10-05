/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let n = cleaned.length;
    for(let i=0;i<n/2;i++){
        if(cleaned[i] !== cleaned[n-i-1]){
            return false;
        }
    }
    return true;
};