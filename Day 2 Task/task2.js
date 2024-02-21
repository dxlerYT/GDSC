/*Create an array called numbers and fill it with five numbers of your choice. Create a new array that has the element of the numbers array multiplied by 2.
 Create another array that has the indexes of the elements stored in numbers array. Log out all arrays when finished. */

let numbers = [1,2,3,4,5]
console.log(`original array: [${numbers}]`)

let MultiNumbers = numbers.map(numbers=>{
  return numbers*2
})
console.log(`Multiplied array: [${MultiNumbers}]`)

let numbersIndex = numbers.map((_, index) => index)//this line has been copied from online sources
console.log(`Index of each element Array [${numbersIndex}]`)