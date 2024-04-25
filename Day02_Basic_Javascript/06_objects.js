// simple object
let person = {
  name: "Jhon",
  age: 30
};

//nested object
let car = {
  make:"Toyota",
  model: "Corolla",
  'year': 2020, // we can declare the key as String
  owner:{
    name: "Alice",
    age: 25
  }
};

// Object containing an Array

let laptop={
  brand: "Apple",
  model : "MacBook Pro",
  specs: ["Intel Core i7", "16GB RAM", "512 GB SSD"]
};

// Object containing methods
let calculator={
  add: function(x,y){
    return x+y;
  },
  subtract:function (x,y){
    return x-y;
  }
};

// complex object

let university = {
  name: "Harvard University",
  location: "Cambridge",
  established: 1636,
  departments: ["Computer Science", "Psychology", "History"],
  ranking: {
    world:1,
    national:1
  },
  getInfo: function (){
    return this.name + "is located in "+ this.location + ". It was established in " +
    this.established +".";
  }
}

console.log(person.name);
console.log(car.owner.name);
console.log(car["year"]);
console.log(car["make"]);
console.log(laptop.specs[0]);
console.log(calculator.add(3,5));
console.log(university.getInfo());

// add new property to object
person.lastname="Master";
console.log(person);
console.log("age" in person);

// deleting a property from an object
delete person.age;
console.log(person);

// cheking if property exists in an object
console.log("age" in person);

// looping through the keys of the object
for (let key in car) {
   console.log(key + ": " + car[key]);
   console.log(car.owner.name);
  }
