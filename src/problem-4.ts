// problem 4

type Circle = {
    shape : 'circle',
    radius : number
}
type Rectangle  = {
    shape: 'rectangle',
    width: number,
    height: number
}
type Shape = Circle | Rectangle;

function calculateShapeArea(value:Shape){
    if(value.shape === 'circle'){
        return (Math.PI * value.radius * value.radius).toFixed(2)
    }
    if(value.shape === 'rectangle'){
        return value.height * value.width;
    }
}

const circle:Circle = { shape: "circle", radius: 5 }
const rectangle:Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  }

const circleArea = calculateShapeArea(circle);
console.log(circleArea)

const rectangleArea = calculateShapeArea(rectangle);
console.log(rectangleArea)