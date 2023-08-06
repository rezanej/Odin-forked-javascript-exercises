const reverseString = function(str) {
    let splitedStr=str.split("");
    let reversedArray=[];
    for (let i = splitedStr.length-1; i >=0 ; i--) {
        reversedArray.push(splitedStr[i]);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
