

function myName(){
    console.log("Abhay Pratap Singh");
}

// myName()

function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
// addTwoNumber(3,null)

function calculateCartValue(num0,num2,...num1){
    return num1;
}

console.log(calculateCartValue(200,300,500,1000));

const user={
    username:"Abhay",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username:"Sam",
    price:399
});

const myNewArray=[200,300,500,1000]
function returnSecondValue(getArray){
        return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500]));