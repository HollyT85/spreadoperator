/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1=[1, 2, 3];
let arr2=arr1;
arr2.push(4);
console.log("second array", arr2);
console.log("first array", arr1);

// Copying an array
let arr3=[4,5,6];
let arr4=[...arr3];
arr4.push(7);

console.log(arr3);
console.log(arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d:4, e:5};
let obj3 = {...obj1, b:7};

console.log(obj1);
console.log(obj2);
console.log(obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj3}, ...arr3, "x", "y", "z"];

console.log(arr5);