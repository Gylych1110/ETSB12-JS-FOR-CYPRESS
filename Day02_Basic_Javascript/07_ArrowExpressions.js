// Basic Arrow Function
const add = (a,b) =>{  // --> lambda arroe expression in JS
  return a+b;
}
console.log(add(3,6));

// single line Arrow Function
const multiply = (a,b) => a*b;

console.log(multiply(3,5));

// No parameters

const greet=()=>{
  console.log("Hello");
}
greet();

//Single parameter

const square=x=> x*x;
console.log(square(7));

// returing objects
const createPerson = (name,age)=>({
  name:name, age:age
})
console.log(createPerson("Alice",25));

//Arrow functions with Array methods
const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(num =>num*num);
console.log(squaredNumbers);

// using map with arrow function to double each number in the array
let doubleNumbers = numbers.map(num=> 2*num);

console.log(doubleNumbers);

// A function concatenate Strings with veriable arguments

function concatenate(...strings){
  return strings.join('');
}
console.log(concatenate("Hello"," ","World!"));

// using the spread operator t oconcetanete two array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let mergeArr=[...arr1,...arr2];
console.log(mergeArr);

// An arrow function to find max value
let findMax = arr =>Math.max(...arr);
console.log(findMax([10,2,25,8,15]));

// using a rest parameter (...number)
const sum = (...numSum)=>{
  let total = 0;
  for (let number of numSum) {
    total+=number;
  } 
  return total;
}
console.log(sum(1,2,3,4,5));

// using the spread operator to concetnete the array followed by the mid array
let mid=[3,4];
arr1=[1,2];
arr2=[...arr1,...mid,5,6];
console.log(arr2);

// split into
let str = "Hello World!";
let charArray = [...str];
console.log(charArray);