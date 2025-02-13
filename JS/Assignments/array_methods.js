const arr = ["apple", 34, 6, { name: "Rohit" }, ["Hello"]];

// length
console.log(arr.length);

// index
console.log(arr[3]);

// Taking value from the object
console.log(arr[3].name);

// at

const data = ["a", "b", "c", "d", "e", "f"];

console.log(data.at(-1)); // Give last element from the array
console.log(data.at(-3));

// push : Adds the new elements at the last of the array and modifies the array  & it returns updated array length

let dataNew = ["e", "f", "g"];
let updatedArrayLength = dataNew.push("hello", 45, { language: "JS" });
console.log(dataNew);
console.log(updatedArrayLength);

// pop : Removes the last element from the original array and it returns the last popped value

let data_1 = ["a", "b", "c", "d"];
let poppedValue = data_1.pop();

console.log(data_1);
console.log(poppedValue);

// shift : Removes the first element from the array and returns the removed element

let names = ["Rohan", "Sohan", "Mohan"];

let shiftedValue = names.shift();

console.log(names);
console.log(shiftedValue);

// unshift : Add the first element in the array & returns updated array length

let namesUpdatedLength = names.unshift("Mango");
console.log(names);
console.log(namesUpdatedLength);

// includes : It checks element in the array and returns true/false

let animals = ["Dog", "Cat", "Lion", "Tiger", "Lion", "Monkey", "Cow", "Cat"];

console.log(animals.includes("lion"));
console.log(animals.includes("Lion"));

// indexOf : Returns the index of the element and if element not found in the array then returns -1
// Suppose there are multiple same elements in the array then it will only return the index of frist element out of them.
// Start left to right
// Case sensitive
// Default value of the index = 0

console.log(animals.indexOf("Monkey"));
console.log(animals.indexOf("monkey"));
console.log(animals.indexOf("Cat"));
console.log(animals.indexOf("Cat", 0));
console.log(animals.indexOf("Cat", 2));
console.log(animals.indexOf("Cat", -7));

// lastIndexOf :
// Start right to left
// Default value of the index = -1

console.log(animals.lastIndexOf("Cat"));
console.log(animals.lastIndexOf("Lion"));
console.log(animals.lastIndexOf("Lion", -5));

// toString : It returns a String
// It doesn't change the original array

let arrToString = animals.toString();
console.log(animals);
console.log(arrToString);

//join():
// Default value passed in join(",")
// We can pass any value in place of comma
// Passed value don't apply at the last element

let arrWithJoin = animals.join();
arrWithJoin = animals.join("--");
arrWithJoin = animals.join(" is animal, ");

console.log(arrWithJoin);

// fill("string", starting index, length of the array)
// Change the original array
// default value of starting index = 0
// default value of ending index = length of the array

let fillArr = animals.fill("a");
console.log(animals);
fillArr = animals.fill("Hello", 3);
console.log(animals);
fillArr = animals.fill("Welcome", 5, 7);
console.log(animals);
fillArr = animals.fill("Welcome", 3, -1);
console.log(animals);

// flat()
// default: 1 level flat karta hai
// Doesn't change the original array

let arrNew = [1, 2, 3, 4, [5, 6, [7, 8, 9, [10, 11]]]];
let flatArr = arrNew.flat();
console.log(flatArr);

flatArr = arrNew.flat(3);
console.log(flatArr);
console.log(arrNew);

// concat()
// doesn't change the original array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [6, 7, 8];

const arrConcat = arr1.concat(arr2, arr3);
console.log(arrConcat);

// reverse()
// Reverse the array
// It Changes the original array be careful

const aRR = ["Hello", 5, "Cat", 9, "#", "$"];
const arrReverse = aRR.reverse();

console.log(arrReverse, aRR);

// slice()
// Doesn't change the original array
// first value shows the starting index
// second value shows the (desired index + 1) upto which we want slice

let myarr = ["Cat", "Mango", 4, "&", "#", 9];
console.log(myarr);
let sliceTheArray = myarr.slice(1, 4);
console.log(sliceTheArray);
sliceTheArray = myarr.slice(-4, -2);
console.log(sliceTheArray, myarr);

// splice()
// Changes the original array
// first value shows starting index and second value shows delete count
// third value and so on... values shows the values to be added

// Removing the elements
let spliceTheArray = myarr.splice(1, 2);
console.log(spliceTheArray, myarr);

// Adding the elements
spliceTheArray = myarr.splice(1, 0, "()", "=", "%");
console.log(spliceTheArray, myarr);

// sort()
// Sort in acending order and alphabatic order
// changes the original array

let arrChar = ["f", "y", "a", "r", "d", "u"];
let arrNum = [3, 7, 4, 40, 9, 5, 2];

let arrCharSorted = arrChar.sort();
let arrNumSorted = arrNum.sort(); // incorrect sorting

console.log(arrCharSorted, arrNumSorted);

arrNumSorted = arrNum.sort((a, b) => a - b); // correct sorting
console.log(arrNumSorted);

// some(): returns true when any value satisfy the condition

const numbers = [2, 4, 5, 24, 53, 42, 48];

// function findNumber(num) {
//   return num > 50;
// }

console.log(numbers.some((num) => num > 50));

// every(): returns true only when all values satisfy the condition
console.log(numbers.every((num) => num < 50));
console.log(numbers.every((num) => num < 100));

// forEach(): returns elements of the array and its index
// it takes function as argument
// Can't use as callback function

let arr4 = ["a", "b", "c", "d", "e", "f", "g"];
// arr4.forEach((elem, index) => console.log(elem, index));
let arr4ForEach = arr4.forEach((elem, index) => console.log(elem, index));
console.log(arr4ForEach); // return undefined becoz we can't use forEach as call back function

// map():returns elements of the array and its index
// it takes function as argument
// Can be used as callback function

arr4.map((elem, index) => console.log(elem, index));
let arr4Map = arr4.map((elem, index) => {
  return elem;
});
console.log(arr4Map);
