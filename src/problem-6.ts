//Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface MyProfile{
    name: string,
    age: number,
    email: string
 }
function updateProfile(profile:{name:string, age: number, email:string}, udateValue:{age:number}) {
    return {...profile,...udateValue }
}
const myProfile: MyProfile={
    name: "Alice",
    age: 25,
    email: "forhadcse@gmail.com"
 }

console.log(updateProfile(myProfile, { age: 26 }));

