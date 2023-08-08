const findTheOldest = function(arr) {
    arr=arr.sort((a,b)=>{
         return (b.yearOfBirth)-(a.yearOfBirth);
    });
    arr=arr.sort((a,b)=>{
        return (a.yearOfDeath-a.yearOfBirth)-(b.yearOfDeath-b.yearOfBirth);
    });
    console.log(arr);
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
