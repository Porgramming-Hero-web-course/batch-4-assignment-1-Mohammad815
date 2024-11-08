## The significance of union and intersection types in Typescript.

 **Union Type in Typescript:**

 Union type in typescript allow us to define a Variable on parameter.union type can hold values of Multiple types.we create a union type use this  | operator between the types within parenthless.let's dive the example

 ```
 // uninon type Example

 type DataType = number | string;

 function UnionTest(result:DataType){

    if(typeof result === 'number'){
        console.log("This is Number")
    }
    else{
        console.log("This is String")
    }
 }

 ```

 
 **Intersection Type in Typescript:**

 intersection type merge the  mulple type into a single type.lets dive with an example

 ```
interface ProductName{
    brand: string;
    model: string;
}
interface ProductInfo{
    ram: number;
    rom: number;
    camera: string 
}

type ProductDetails = ProductName & ProductInfo;

const waltonMobile : ProductDetails = {
    brand: "Samsung",
    model: '520',
    ram: 6,
    rom: 128,
    camera: '50 MP'
}

 ```
