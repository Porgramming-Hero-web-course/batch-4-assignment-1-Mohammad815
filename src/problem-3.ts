// problem 3

function countWordOccurrences(sentence:string,word:string):number{
    let arrayOfSentence:string[] = sentence.split(' ')
    let numberOfMatchWord:string[]= [];

    arrayOfSentence.forEach(singleWord => {
        if(singleWord.toLowerCase()==word.toLowerCase()){
            numberOfMatchWord.push(singleWord);
        }
    })
    return numberOfMatchWord.length;
}


//const x = countWordOccurrences([1,3,5,5,4,8],5);
const x = countWordOccurrences("TypeScript is great. I love TypeScript TypeSCript !", "typescript");
console.log(x)