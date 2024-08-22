//proto creates the reference of object
// let obj1={
//     fname:"tanuj",
// }
// let obj2={
//     lname:"Pratap",
// }
// obj2.__proto__=obj1;
// console.log(obj2.fname);//firstly it will search on his object(object2) and then search on reference object that is object1


// var obj={
//     name:"john",
// }
// obj2=Object.create(obj);
// obj2.lname="Pratap"  
// console.log(obj2);

// console.log(obj2.name);


//prototype
// function Person(name,age){
//     let person=Object.create(obj);
//     person.name=name;
//     person.age=age;
//     return person;
// }
// var obj={
//     greet(){
//         console.log(`Hello${this.name}`);
        
//     }
// }
// let user=new Person("john",18);
// user.greet();
// console.log(user);

//by using prototype
// function Person(name,age){
//     let person=Object.create(Person.prototype);
//     person.name=name;
//     person.age=age;
//     return person;
// }

//  Person.prototype.greet=function(){
//         console.log(`Hello${this.name}`);
        
//     }

// let user=new Person("john",18);
// user.greet();
// console.log(user);


// function Person(name,age){
   
//     this.name=name;
//     this.age=age;
  
// }

//     Person.prototype.greet=function(){
//         console.log(`Hello${this.name}`);
        
//     }

// let user=new Person("john",18);
// user.greet();
// console.log(user);



//by using class

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello${this.name}`);
        
    }
}
let user=new Person("tanuj",18);
user.greet();
console.log(user);
