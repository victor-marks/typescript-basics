export {};
let message = 'welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'learning TS basics';

let isBeginner: boolean = true;
let total: number = 100;
let name: string = 'Victor';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color {
  Red = 5,
  Green,
  Blue
}

let c: Color = Color.Green;
console.log(c); // green = 6

// any
let randomValue: any = 10;
randomValue = true;
randomValue = 'Victor';

let myVariable: any = 10;

// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// unknown
let myVariable2: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

// if (hasName(myVariable2)) {
//   console.log(myVariable2.name);
// }
// must specify string
// (myVariable2 as string).toUpperCase();

// regular JS
let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

// no autofill/intellisense support when using any
let anyType: any;
anyType = 20;
anyType = true;

function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
add(5, 10);
// add(5, '10'); won't work
add(5); // num2 is optional with '?'

// default parameter for num2
function add2(num1: number, num2 = 1): number {
  if (num2) return num1 + num2;
  else return num1;
}
add2(5, 10);
// add(5, '10'); won't work
add2(5); // num2 is optional with '?'

interface Person {
  firstName: string;
  lastName: string;
}

// function fullName(person: { firstName: string; lastName: string }) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);

class Employee {
  public employeeName: string;
  // protected employeeName: string;
  // private employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Victor');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
