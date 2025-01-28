// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//note  bracket here so that a symobol is key here otherwise it will be a simpel string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])//this bracket method is use to access obj element too.
// console.log(JsUser["full name"])//to access string key dot will not work so this method is used
// console.log(JsUser[mySym])//bracket method is used for accessing symbol not dot

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");//adding function to object
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this refers to obj jsuser
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());