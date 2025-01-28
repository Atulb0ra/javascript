const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//op: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//op: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]//spread method ->//op: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
// o/p:[   1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting o/p:[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]