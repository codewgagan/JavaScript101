let fArray;
console.log(fArray);//undefined
console.log(typeof fArray);//undefined

let sArray = null
console.log(sArray);//null
console.log(typeof sArray);//object

// Add Array at the end of an array Day 01
function append(arr,element){
    return [...arr,element]
}
let fruits = ["apple","mango"]
let newFruits = append(fruits,"banana")
console.log(newFruits);

// Day 02
// Day 03
// Day 04
// Day 05