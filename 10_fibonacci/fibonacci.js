const fibonacci = function(num) {
    if(num<0)
        return "OOPS";
    let a=1;
    let b=1;
    for(let i=0;i<num-2;i++)
    {
        let temp=a;
        a=b;
        b=temp+b;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
