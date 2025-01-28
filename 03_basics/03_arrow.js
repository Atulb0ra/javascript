const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//here in node this is not window
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//{} ot valid

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//this.something only work on object but this is valid here 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //in arrow function this is not valid it gives {}
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2//implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )//same as above

const addTwo = (num1, num2) => ({username: "hitesh"})//to return a object implicitly


console.log(addTwo(3, 4))

