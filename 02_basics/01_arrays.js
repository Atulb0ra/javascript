// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//add 9 to starting index 0 and shift rets of elements to right
// myArr.shift()//remove 0 index element and shift remaining element to left

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()//gives a string wwhich join all elements together like 0,1,2,3,4,5

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);//o/p :A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)//slice doesnot efferct original array
console.log(myn1);// o/p : [1,2]
console.log("B ", myArr);//o/p :B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) //splice changes the original array
console.log(myn2);// o/p : [1,2,3]
console.log("C ", myArr);//o/p : C [0,4,5]
