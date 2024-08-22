// //functions

// // function name(){
// //     console.log("Hello");

// // }
// // name();


// //functions with single parameter
// function name(a){
// console.log("Hello"+a);

// }
// name("learners");

// //function with multiple parameters
// function add (a,b){
// console.log(a+b);

// }
// add(5,5);

// function add (a,b){
//     console.log(a+b);
    
//     }
//     let x=5;
//     let y=5;
//     add(x,y);


    // function add (a,b,c){
    //     console.log(a+b+c);
        
    //     }
    //     let x=5;
    //     let y=5;
    //     add(x,y,20);


//return statement
        // function add (a,b,c){
        //   return a+b+c;
            
        //     }
        //     let x=5;
        //     let y=5;
        //   let addition=  add(x,y,20);
        //   console.log(addition);
          

     //local and global variable scope in functions     

    //  let a=5//global
    //  function local(){
    //     let b=3;//local variable
    //     console.log(a);
        
    //  }
    //  local();//print the value of a
    //  console.log(b);//give error because b is out of scope
     
     
   // Anonymous function
//    let fun = function (){
//     console.log("Hello");
    
//    }
//      fun();

//self invoked or immedietly invoked function
//   (function (){
//     console.log("Hello");
    
//    })
//      ();


//Arrow function
let a= (a,b)=>{
    return a+b;
}
console.log(a(3,4));
