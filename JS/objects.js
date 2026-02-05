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

console.log(userDetails.email)
console.log(userDetails["email"])
console.log(userDetails["fullName"])
console.log(typeof userDetails[mySym])

userDetails.email="abhay@github.com"
Object.freeze(userDetails)
userDetails.email="abhay@microsoft.com"
console.log(userDetails["email"])