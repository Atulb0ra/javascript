// GOAL:
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); 
// //here we want to create a funcn which gives true length means not include space



//imp
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){//this is super case since everything is object so it can be used for object, array, function
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){//only for array
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()




// prototype inheritance beahaviour

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//M1 : here tasupport inherits teachingsupport
}

Teacher.__proto__ = User//M2 : here teacher inherits user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//M3: teachingsupport inherits teacher




//our goal code
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()