const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let password = '0123456789';
let answer = password;

reader.question("hello, what is your password",function(answer){
    
    if(answer.length == password.length){

   if (answer == password && answer.length == password.length){
        console.log("Password Correct!!")
    }else if (answer != password){
        console.log("password Incorrect")
    }
} else if (password.length != answer.length){
console.log("password is not long enough")
console.log(`your answer is ${answer.length} characters`)
console.log(`it needs to be ${password.length}`)
}
});

