import "./style.css";
import { setupCounter } from "./counter.ts";

//1
let string: string = "Hello, TypeScript!";
let number: number = 42;
let boolean: boolean = true;
let array: number[] = [1, 2, 3];

function multiply(a: number, b: number, showResult?: boolean) {
  if (showResult) {
    return console.log(a * b);
  }
  return a * b;
}

//2
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//3
interface Car {
  make: string;
  model: string;
  year: number;
}
let Car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
//console.log(Car);

//4
function greet(name: string, greeting?: string): string {
  if (!greeting) {
    return `Hello, ${name}!`;
  }
  return `${greeting}, ${name}!`;
}

//5
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(`Id is string with value ${id}`);
  } else {
    console.log(`Id is number with value ${id}`);
  }
}

//6
function identity<T>(arg: T): string {
  return typeof arg;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
