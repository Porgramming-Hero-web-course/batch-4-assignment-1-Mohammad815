## The significance of union and intersection types in Typescript.

 **Union Type in Typescript:**

 Union type in typescript allow us to define a Variable on parameter.union type can hold values of Multiple types.we create a union type use this  | operator between the types within parenthless.let's dive the example

 ```
 // uninon type Example

 type DataType = number | string;

 function UnionTest(result:ataType){

    if(typeof result === 'number'){
        console.log("This is Number")
    }
    else{
        console.log("This is String")
    }
 }
 

 ```
