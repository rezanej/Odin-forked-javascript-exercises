const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	let s=0;
  for (let index = 0; index < arr.length; index++) {
    s+=arr[index];
  }
  return s;
};

const multiply = function(nums) {
  let mul=nums[0];
  for (let i = 1; i < nums.length; i++) {
    mul*=nums[i];
    
  }
  return mul;

};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  let f=1;
	for (let i = 2; i <= num; i++) {
    f*=i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
