"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'learning TS basics';
var isBeginner = true;
var total = 100;
var name = 'Victor';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // green = 6
// any
var randomValue = 10;
randomValue = true;
randomValue = 'Victor';
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// unknown
var myVariable2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
// if (hasName(myVariable2)) {
//   console.log(myVariable2.name);
// }
// must specify string
// (myVariable2 as string).toUpperCase();
// regular JS
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
// no autofill/intellisense support when using any
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// add(5, '10'); won't work
add(5); // num2 is optional with '?'
// default parameter for num2
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
// add(5, '10'); won't work
add2(5); // num2 is optional with '?'
// function fullName(person: { firstName: string; lastName: string }) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var Employee = /** @class */ (function () {
    // protected employeeName: string;
    // private employeeName: string;
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Victor');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
