

function sumArray(num:number[]):number{
 return num.reduce((acc,value)=>acc + value, 0)
}
console.log(sumArray([1,2,3,4,5]))