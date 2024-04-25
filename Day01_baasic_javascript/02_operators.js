console.log(5+5*(-2)-10/5); 

let a = 5;
console.log(++a);
a = 9;
console.log(a++);

a +=5;
console.log(a);

console.log(5>3);
let num = 2;
let num_str = "2";
let number = 2;
let number_str = "2";

console.log(num==number);
console.log(num_str==number_str);
console.log(num==num_str);
console.log(num===num_str);  // false
console.log(num===number);


console.log(true && true);
console.log(false || true);

console.log((5>4) && (5<3));

//conditional statements => if, if else, switch, break, continue same as Java

let num1 =10;
let num2 = 100;
if (num1>num2) {
  console.log(num+ " is greater than "+ num2);
} else{
  console.log(num1+ "is less than "+num2);
}

let month = 5;
let dayCount;

switch(month){
  case 1:
    dayCount = 31;
    break;
}