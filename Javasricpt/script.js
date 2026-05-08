// console.log("");





// for (var i= 1;i<=10;i++)
//     {
//         console.log(2*i);
//     }
// let a =[45,17,25,13,68,98,57,18,20,47]

// for(var z =0;z<=10;z++)
// {
//     console.log(a[z]);
// }
// let y=0;
// do{
//     console.log(a[y]);
//     y++;
// }
// while(y<10);

// if else code below 
// let marks = 95;
// let A=90;
// let B= 75;
// let C= 50;
// if(marks>A)
// {
//  console.log("A+");
// }
// else if(marks>50 &&){


// }
// else
// {

// }
  //ternary operator 
//   let data;
//   let name = "exvyc:";
//   data = name ||"N/A"
//   if(name){
//     data = name;

//   }
//   else{
//     data="N/A";
//   }
// console.log(data);
//continue and break 



//switch case
// let choice = 2;
// switch(choice){
//     case 1 :{
//         console.log("Tea");
//         break;
//     }
//     case 2 : {
//         console.log("coffee");
//         break;
//     }
//     case 3 : {
//         console.log("lassi");
//         break;
//     }
//     case 4 : {
//         console.log("paani");
//       break;
//     }
// }

  // let a = 20,b = 30;
  // function sum(x,y){
  //   let z= x+y;
  //   console.log(z);
  // }
  // sum(a,b)


  // let abc = function(){
  //   console.log("hello world");

  // };
  // console.log(abc);
  // abc();

  //arrow function 
  //scope
//   let test ="this is global test variable ";
//   function classA(){
//     console.log("classA", test);
//   }
//   function classB(){
//     console.log("classB", test);
//   }
//   function classC(){
//     let test2="this is local variable"
//     console.log("classC", test);
//     console.log("classC", test2);
//   }
//   function classD(){
//     console.log("classD", test);
//     {
//       let v =10;
//       console.log(v);
//     }
//   }
//   function classE(){

//     let a = "rehaan";//this is a local variable and it can be called inside the block as well as anywhere inside the function
//     {
//       let b = "karan";
//       console.log(a);
//       console.log(b);
//     }
//     console.log(b);//it will not be called as b is let inside the block it is a block variable 
    
//   }
//   function classF(){
//   }
//   function classG(){
//   }
//   //variable and function is always declared on the top 
// classA();
// classB();
// classE();
// //hosting 
// abc();

// function abc() {
// console.log("Hello");
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]; //creation of Array

// for (
//   var i = 0;
//   i < 8;
//   i++                              //Reading of array
// ) {
//   console.log(arr[i]);
// }

// console.log(arr);

// arr[2] = arr[2] + 10;              //Updation of array
// console.log(arr); 

// arr = [];
// console.log(arr);                   //deletion of array

// hence the CRUD operation has been done since we have perfomed each task of Creation and Reading and Updation and Deletion
// arr.pop();




//ARRAY
// let fd = [
//   ["karan","19-10-2005,8815811535", "bhopal", "student"],
//   ["rehani","19-10-2005,8815811535", "rew", "student"],
//   ["nans","19-10-2005,8815811535", "sehore", "student"],
//   ["nunau","19-10-2005,8815811535", "america", "student"],

  
// ];

// fd.forEach(Element => {
//   console.log(Element)
// });

// let FData = [
//   {
//     "name": "karan",
//     "dob_phone": "19-10-2005,8815811535",
//     "city": "bhopal",
//     "role": "student"
//   },
//   {
//     "name": "rehani",
//     "dob_phone": "19-10-2005,8815811535",
//     "city": "rew",
//     "role": "student"
//   },
//   {
//     "name": "nans",
//     "dob_phone": "19-10-2005,8815811535",
//     "city": "sehore",
//     "role": "student"
//   },
//   {
//     "name": "nunau",
//     "dob_phone": "19-10-2005,8815811535",
//     "city": "america",
//     "role": "student"
//   }
// ];

// FData.forEach((item) => {
//   console.log(item["phone"]);
// });


// console.log(FData);
// console.log(FData[0]["name"]); //for the json notation: FData.name

// let obj = {
//   name: "Rehaan",
//   dob: "18-11-2006",
//   phone: 8871412826,
//   city: "Bhopal",
//   occupation: "Teacher",
// };

// console.log(Object.values(obj));
// console.log(Object.keys(obj));


// let arr=[1,2,3,34,4,5,6,6,354,7,5,89,45,24,89]

// arr.sort((a , b) => a - b);
// console.log(arr)

// console.log(arr.find((val)=> val>40));
// console.log(arr.findIndex((val)=> val==5));
// console.log(arr.findLastIndex((val)=> val==5));

// let ar=[1,2,3,34,4,5,6,6,354,7,5,89,45,24,89,23245]

// console.log(ar.filter((val) => val>20));
// console.log(ar.find((val) => val>20));
