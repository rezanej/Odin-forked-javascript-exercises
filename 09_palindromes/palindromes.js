const palindromes = function (str) {
    let chars=str.trim().toLowerCase().split("");
    chars=chars.filter((char)=>{
        if(char!==' ' && char!=='.'&& char!=='!' && char!=='?' && char!==',')
        return true;

    }
        );
    let revChars=[];
    for (let index =chars.length-1 ; index >=0; index--) {
        revChars.push(chars[index]);
        
    }
    return chars.join("")===revChars.join("");
};

// Do not edit below this line
module.exports = palindromes;
