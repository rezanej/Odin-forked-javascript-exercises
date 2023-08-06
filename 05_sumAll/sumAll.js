const sumAll = function(from ,to) {
    if(from<0 || to <0 || typeof(from)!=="number"|| typeof(to)!=="number")
        return "ERROR"
    if (from>to)
    {
        let temp=from;
        from=to;
        to=temp;
    }
    let sum=from;
    for (let i = from+1; i <= to; i++) {
        sum+=i;
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
