// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);//true
// console.log("02" > 1);//true

console.log(null > 0);//false 
console.log(null == 0); //false
console.log(null >= 0); //true
//thre reason is that equality check == and comparisons >,<,>=,<= works differently
// comparisons convert null to a number treating it as 0 thats why 1st output is false and 3rd output is true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined <= 0);//false

// === check datatype 

console.log("2" === 2); //false