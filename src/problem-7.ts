//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.


class Car{
    constructor(
        public brand: string,
        public model:string,
        public year:number
    ){}

    public getCarAge(): number{
        const currentYear = new Date().getFullYear()
        return currentYear- this.year;
    }
}


// Sample Input 1:
const car = new Car("Honda", "Civic", 2010);
console.log(car.getCarAge())

// Sample Output 1:
// 6 (assuming current year is 2024)