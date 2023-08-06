const removeFromArray = function(array,...remove) {
    for (const object of remove) {
        for (let i = 0; i < array.length; i++) {
            if(object===array[i])
            {
                array.splice(i,1);
            }
            
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
