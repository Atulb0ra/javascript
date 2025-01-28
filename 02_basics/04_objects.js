// const tinderUser = new Object()//constructor method to create object always singleton
const tinderUser = {}//non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {//objects of objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj5 = Object.assign({}, obj1, obj2, obj4)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj6 = {...obj1, ...obj2}//spread method ---> //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);
// console.log(obj5);
// console.log(obj6);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//gives array of key
// console.log(Object.values(tinderUser));//array of values
// console.log(Object.entries(tinderUser));//array of key value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//false ssince key does not exist


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // this is valid too

// const {courseInstructor} = course //this is valid too and used a lot too
const {courseInstructor: instructor} = course // this one is for short name

// console.log(courseInstructor);
console.log(instructor);



// ****JSON FILE FORMAT for API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// sometimes API are in FORMAT of this type mix of array and object so there operations are available in that
[
    {},
    {},
    {}
]