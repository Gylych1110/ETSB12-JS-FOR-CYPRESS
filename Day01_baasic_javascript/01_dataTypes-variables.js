console.log('Hello B12');

// let

let a; // undefined
console.log(typeof a);

a=6;  // number
console.log(typeof a);

a='Javascript';
console.log(typeof a)

a = true
console.log(typeof a)

//let a = 6; 

let b=6, c="Cypress";
console.log(b+c);
console.log(b,c);

let str1 = "I am learning";
a = "javascript";
let result;
 result = str1+ " " + a + " and "+ c;
 console.log(result);

 result = `This result veriable is : ${str1} ${a} and ${c}`;
console.log(result)

// var
var name = "Mike";
var age = 35;
var name_object={firstname:'Jake', lastname:'Masters'};
var truth = true;
var skills = ["HTML","CSS","JS"];
var name = "Kate";

//object
var student ={
  firstName: "Dave",
  lastName: "Masters",
  age: 26,
  height:180,
  fullName:function(){
    return this.firstName+" " + this.lastName
  }
}

const ageValue = student.age;
console.log(ageValue);
console.log(student.fullName());