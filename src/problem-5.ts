// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

type Person = {
    name : string;
    age: number;
}

function getProperty<T,K extends keyof T>(person:T,key:K):T[K]{
    return person[key]
}

const person:Person = { 
    name: "Alice", 
    age: 30 
};
console.log(getProperty(person, "name"));