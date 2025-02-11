
const arr = ["apple", 34, 6, {name:"Rohit"}, ["Hello"]]

// length
console.log(arr.length)

// index
console.log(arr[3])

    // Taking value from the object  
    console.log(arr[3].name)

// at

const data = ["a", "b", "c", "d", "e", "f"]

console.log(data.at(-1)) // Give last element from the array
console.log(data.at(-3))


// push : Adds the new elements at the last of the array and modifies the array  & it returns updated array length

let dataNew = ["e", "f", "g"]
let updatedArrayLength =  dataNew.push("hello", 45, {language: "JS"})
console.log(dataNew)
console.log(updatedArrayLength)

// pop : Removes the last element from the original array and it returns the last popped value 

let data_1 = ["a", "b", "c", "d"]
let poppedValue = data_1.pop()

console.log(data_1)
console.log(poppedValue)

 