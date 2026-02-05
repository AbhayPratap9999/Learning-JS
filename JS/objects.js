//object literals;
const mySym = Symbol("key1")

const userDetails ={
    name:"Abhay",
    "fullName":"Abhay Pratap Singh",
    [mySym]:"myKey1",
    age:18,
    location:"Jaipur",
    email:"abhay@google.com",
    isLoggeedIn: false,

}

// console.log(userDetails.email)
// console.log(userDetails["email"])
// console.log(userDetails["fullName"])
// console.log(typeof userDetails[mySym])

userDetails.email="abhay@github.com"
// Object.freeze(userDetails)
userDetails.email="abhay@microsoft.com"
//console.log(userDetails["email"])

// add methods
userDetails.greeting = function () {
    console.log("Hello JS user");
};

userDetails.greetingTwo = function () {
    console.log(`Hello JS user, ${this.fullName}`);
};

// call methods
userDetails.greeting();
userDetails.greetingTwo();