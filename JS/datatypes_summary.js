//primitive

// 7 types:String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score =100;         //Number
const scoreValue =100.3;  //Float / Double
const isLoggedIn = false; //Boolean
const outsideTemp = null; //null
let userEmail;            //not assigned
const id =Symbol('123')   //Symbol
const anotherId = Symbol('123')  //Symbol
console.log(id === anotherId);   //Strict Comparison
const bigNumber = 534753484634249249n;  //Bigint

// Reference(Non primitive)

// Array, Objects, functions

const heroes=["Shaktiman","Superman","Ironman"];
let myObj={
    name:"Abhay",
    age:22,
}



// Stack(Primitive), Heap(Non-primititve)

let myYoutueChannel="Notsuredotcom";
let anotherName= myYoutueChannel;
anotherName="chaiaurcode";

console.log(myYoutueChannel);
console.log(anotherName);

let userOne={
    email:"incredibleabhay2424@gmail.com",
    upi: "abhay@ptyes"
}

let userTwo=userOne;

userTwo.email="hitesh@gmail.com"

