// //array
// let name=["tanuj","vaibhav","vasu"];
// console.log(name);

// //access element of the array by index
// console.log(name[0]);

// //length of the array
// console.log(name.length);

// //we can store multiple datatype in one array like number, String, boolean , null , undefined
// let arr=[1,"hello",true,null];
// //we can also add single value in existing array
// arr.push("tanuj");
// //if you want to push the element in 0th index of the existing array 
// arr.unshift("Anuj");
// //if you want to delete the element of the particular index of the array
// //and you want to add elent on the deleted index
// //arr.splice(starting index from where you want to delete the data,no of data,element you want to add);
// arr.splice(1,1 ,"world");
// console.log(arr);
// //print the array using loop
// for(let i=0;i<arr.length;i++ ){
//     console.log(arr[i]);
    
// }


//Array Methods
//forEach loop

// arrname.forEach(
//     (value,index,arr)=>{
//         console.log(val);
        
//     }
// )


//let num=[10,20,35,19,25,60];
// num.forEach(
//     (val)=>{
//         console.log(val);
        
//     }
// )
// num.forEach(
//     (val,index)=>{
//         console.log(val+" "+ index);
        
//     }
// )

// //we can't store it in another array
// let a=num.forEach(
//     (val,index)=>{
//         console.log(val+" "+ index);
        
//     }
// )
// console.log(a);//give error

//map Method
//using map method we can easily store the value of existing array to another array and it will change the new array not existing array
// let a=num.map(
//     (val)=>{
// return val*2;

//     }
// )
// console.log(a);//changes the new initialized array a
// console.log(num);//same as before after applying map


//concat Method =>add two arrays in single array
// let num1=[10,20,30,40,50];
// let num2=[60,70,80,90,67];
// console.log(num1.concat(num2));

// //indexof Method=>find the index of the element
// console.log(num1.indexOf(50));

// //reverse
// console.log(num1.reverse());
// //sort
// console.log(num1.sort());


//slice Method =>if you want to use particular part of the array from start index to end index
//it will not change the original array 
//arrname.slice(startindex,endindex);
//let num=[10,20,30,40,50];
// console.log(num.slice(1,4));

//diffrence between slice and splice
//slice=>slice does not make changes in the original array it makes new array of sliced part
//splice=>change the original array


//tostring Method  =>convert the array element into string

//console.log(num.toString());=>//change into string

//filter =>filter the elements based on the given condition
// let a=num.filter((val)=>{
//     if(val>=10&&val<=40){
//         return val;
//     }
// })
// console.log(a);

//find Method  =>return the value based on given condition if exist
// let a=num.find((val)=>{
//     return val==10;
// })
// console.log(a);

//findindex=>return the index of the given value
// let a=num.findIndex((val)=>{
//     return val==10;
// })
// console.log(a);


//findLastIndex()
//if there are two same values are present in the array or you want to find the the second same element index

// let a=num.findLastIndex((val)=>{
//     return val==10;
// })
// console.log(a);

//split Method =>split the element on the basis of provided condition like comma ,space
// let num='10,20,30';
// let arr=num.split(',');
// arr.forEach(
//     (element)=>{
// console.log(element); //10 20 30

//     }
// )

// //join =>join the element with provided word like and , .
// let jo=arr.join(",");
// console.log(jo);//10,20,30

//for in loop
// let arr=[10,12,34,56,78,978];
// for(let ind in arr ){
//     console.log(arr[ind]);
    
// }
// //for of loop
// for(let val of arr){
//     console.log(val);
    
// }

//2D Array
let arr=[["tanuj",21],["vasu",20],["vaibhav",22]];
// console.log(arr);//print whole array
// console.log(arr[0]);//print the first array
// console.log(arr[0][1]);//print first element of 0th row
// //print the 2D array using loop
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
        
//     }
// }

//print using forEach loop
// arr.forEach(
//     data=>{
//         data.forEach(
//             val=>{
//                 console.log(val);
                
//             }
//         )
//     }
// )
//print using for of loop
// for(let ar of arr){
//     for(let i of ar){
//         console.log(i);
        
//     }
// }

//copy Method
// arr1=["john",202,true];
// arr2=arr1;//arr2 and arr1 have same element
// arr1.push("Berg");
// //we want to change only array1 but it will reflect in both the arrays either we push on array1 or array2

// console.log(arr1);
// console.log(arr2);

// arr1=["john",202,true];
// arr2=["john",202,true];
// arr2.push("Berg");//now will add only array2
// console.log(arr1);
// console.log(arr2);

// //copy array using slice method
// let arr1=["john",202,true];
// let arr2=arr1.slice(0);
// arr2.push("Berg");//now will add only array2
// console.log(arr1);
// console.log(arr2);

// //add using concat method
// let arr1=["john",202,true];
// let arr2=arr1.slice(0).concat(["item"]);
// arr2.push("Berg");//now will add only array2
// console.log(arr1);
// console.log(arr2);

//copy using spread operator
// let arr1=["john",202,true];
// let arr2=[...arr1];
// arr2.push("Berg");//now will add only array2
// console.log(arr1);
// console.log(arr2);

//Array Destructuring
// let array1=["thomas","chad"];
// //we want to create no of variable where we can store array elements
// let item1=array1[0];
// let item2=array1[1];
// console.log(item1);
// console.log(item2);


// let array1=["thomas","chad"];
// //we want to create no of variable where we can store array elements
// let [item1,item2]=array1;

// console.log(item1);
// console.log(item2);

let array1=["thomas","chad","neo","magnus"];
//we want to create no of variable where we can store array elements
let [item1,item2,...item3]=array1;

console.log(item1);
console.log(item2);
console.log(item3);//store multiple items in one variable using spread operator

