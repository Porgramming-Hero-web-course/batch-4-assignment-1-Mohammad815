// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


function sumArray(num:number[]):number{
 return num.reduce((acc,value)=>acc + value, 0)
}
console.log(sumArray([1,2,3,4,5]))
// console.log(sumArray([10,20,30,40,50]))