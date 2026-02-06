// singelton

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Abhay"
tinderUser.isLoggedIn= false

console.log(tinderUser);

const regularUser={
    email:"abhay@microdoft.com",
    fullName:{
        userFullName:{
            firstName:"Abhay",
            middleName:"Pratap",
            lastName:"singh",
        }
    }
}

// console.log(regularUser.fullName);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));