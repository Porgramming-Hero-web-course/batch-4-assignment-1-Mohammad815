// remove the duplicate number from the array

function removeDuplicates(arr:number[]):number[]{
    let uniqe:number[] = [];
    arr.forEach(value => {
        if(!uniqe.includes(value)){
            uniqe.push(value);
        }
    })
    return uniqe;

}



const arr = [1, 2, 2,5,6,6, 3, 4, 4, 5]
const result  = removeDuplicates(arr)
console.log(result)


