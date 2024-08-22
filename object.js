// let obj={
//     name:"tanuj",
//     age:21
// }
// // console.log(obj.name);
// // console.log(obj.age);
// console.log(obj["name"]);
// console.log(obj["age"]);

//we can also write key in double bracket

// let obj={
//     "name":"tanuj",
//     "age":21
// }

//we can also write space separated key
// let obj={
//     "last name":"pratap"
// }
// console.log(obj["last name"]);

//we can function as a object and array as a object
// let obj={
//     fun:function(){
//         console.log("i am function");
       
//     },
//     arr:[1,2,3,4]
// }
// console.log(obj.fun());
// console.log(obj.arr);

// //if you want to add property statically
// obj.key="item";//item will be added in obj object
// console.log(obj);

// let a="key2";//=>if you want to add the value of a in the object as a key
// obj[a]="item2";
// // console.log(obj);

// //printing object using for in loop
// for(let i in obj){
//     console.log(obj[i]);
    
// }

// //printing object using for of loop
// for(let i of Object.keys(obj)){
//     console.log(obj[i]);
    
// }

//object inside array
// let arr=[
//     {user:1,
//         name:"tanuj"

//     },
//     {user:2,
//         name:"anuj"

//     },
//     {user:3,
//         name:"bittu"

//     }
// ]
// console.log(arr);
// console.log(arr[0]);
// //print by loop
// for(let i in arr){
//     console.log(arr[i]);
    
// }
// for(let i of arr){
//     console.log(i);
    
// }

// let[item1,item2]=arr;
// console.log(item1);
// console.log(item2);

//let[item1,...item2]=arr;

// let[{name},item2,{name:name1}]=arr;
// let[{name},,{name:name1}]=arr;
// console.log(name);
// console.log(item2);
// console.log(name1);

// //function inside function
// function fun1(){
//     console.log("i am function 1");
//     function fun2(){
//         console.log("i am function2");
        
//     }
//     fun2();//this function will be called inside the function1
// }
// fun1();

//lexical scope
//when variable is defined only in parent function then child function will take the value of parent
// function fun1(){
//     let a=1;
//         console.log("i am function"+a);
//         function fun2(){
//             console.log("i am function"+a);
            
//         }
//     fun2()}
//         fun1();

        //when variable is defined in both function then they will  take self variable 

        // function fun1(){
        //     let a=1;
        //         console.log("i am function"+a);
        //         function fun2(){
        //             let a=2;
        //             console.log("i am function"+a);
                    
        //         }
        //     fun2()}
        //         fun1();

//when value is defined globally then both function take the value of global variable
     //   let a=1;
        // function fun1(){
       
        //         console.log("i am function"+a);
        //         function fun2(){
                 
        //             console.log("i am function"+a);
                    
        //         }
        //     fun2()}
        //         fun1();


        // function fun1(){
        //     console.log("i am function"+a);//show error
        //     function fun2(){
        //      let a=2;
        //         console.log("i am function"+a); 
        //     }
        // fun2()}
        //     fun1();

            //Debugger
           // to find eror, breakpoint , to make correction in the code we use debugger
// function fun(){
//     debugger;
//     for(let i=0;i<10;i++ ){
//         console.log(i);
        
//     }
// }

// fun();

//Set
//set is a collection of unique elements
// const s=new Set([10,20,30,40,50]);
// s.add(60);
// s.add("hello");
// console.log(s);

// //length of set
// length=0;
// for(let elements of s){
//     length++;
// }
// console.log(length);

//Map (data structure )
// var map1=new Map([[1,"one"],["fname","mickey"],["whole number",[0,1,2,3,4]]])
// console.log(map1);
// //find the value by key
// console.log(map1.get("fname"));
// //find the value by index
// console.log(map1.get(1));

// //print the keys of the value
// var k=map1.keys();
// for(let key of k){
//     console.log(key);
    
// }

//change the value of the key
// var map2=new Map();
// map2.set("fname","mouse");
// console.log(map2);

//this keyword
// let obj={
// name:"tanuj",
// fun:function(){
//     console.log(name);
    
// }
// }
// obj.fun();//it will show error;

// let obj={
//     name:"tanuj",
//     fun:function(){
//         console.log(this.name);//this reference to the current object
        
//     }
//     }
//     obj.fun();
    
    // let obj={
    //     name:"tanuj",
    //     fun:function(){
    //         console.log(obj.name);//obj reference to the current object
            
    //     }
    //     }
    //     obj.fun();

    //window object
    // console.log(obj.name);//it will take reference from the window object


    //new keyword =>will create a new empty object
    // function fun(){
    //     return this;
    // }
    // console.log(fun());//return the window object
    
    // function fun(){
    //     let fname="john";
    //     return this;
    // }
    // console.log(fun());//not print fname

    // function fun(){
    //     let fname="john";
    //     this.fname=fname;//assigned the value of fname to new object
    // }
    // console.log(new fun());//new will create a new object 
        
    // function fun(){
    //     let fname="john";
    //     this.fname=fname;//assigned the value of fname to new object
    // }
    // var obj=new fun();
    // console.log(obj);
    // console.log(obj.fname);//working like a object

    //constructor function
   // technically are regular functions.
   //there are two conventions though:
   //they are named with capital letterv first
   //they should be executed only with "new" Operator;
//    function User(name){
//     this.name=name;
//    }
//     // console.log(new User("tanuj"));
//     let person =new User("tanuj");
//     console.log(person.name);
//if there is no new keyword
    // function User(name){
    //     if(!new.target){
    //         return new User(name);
    //     }
    //     this.name=name;
    //    }
    //     // console.log(new User("tanuj"));
    //     let person =User("tanuj");
    //     console.log(person.name);
    
       // symbol=>Symbol represent a unique identifier
    //    let sym=Symbol("id");
    //    console.log(sym.toString());
    //    console.log(sym.description);
    //    let sym1=Symbol("id");
    //    console.log(sym===sym1);//return false because symbol always unique

       
   // symbol in objects
//    let id=Symbol("id");
//    let obj={
//     name:"john",
//     [id]:1,
//    }
//    console.log(obj[id]);

//    let id=Symbol("id");
//    let obj={
//     name:"john",
   
//    }
//    obj[id]=1;
//    console.log(obj[id]);
   

//we can't print symbol by using loop coz it is a hidden property have to use it uniquely
let id=Symbol("id");
let obj={
 name:"john",
 [id]:1,
}
for(let key in obj){
    console.log(key);//will not print id only print name
    
}
       


