const { LogIn } = require("lucide-react");

const name = "Abhay";
const repoCount=10;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //string manipulation.

const url = "https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
