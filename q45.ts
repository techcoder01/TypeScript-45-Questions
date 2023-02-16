// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
export default function q45(){
interface CarOptions {
  color?: string;
  sunroof?: boolean;
}

function createCar(manufacturer: string, model: string, options: CarOptions): { manufacturer: string, model: string } & CarOptions {
  const car = { manufacturer, model, ...options };
  return car;
}

const myCar = createCar('Toyota', 'Camry', { color: 'silver', sunroof: true });
console.log(myCar);
}
q45();