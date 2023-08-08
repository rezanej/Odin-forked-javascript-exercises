const getTheTitles = function(arr) {
    let res=[];
    console.log(arr);
    arr.forEach(element => {
        res.push(element.title);
    });
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
