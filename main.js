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
var message = "Hello User!";
// Variable declaration
var x = 20;
var y = 15;
// variable type
var isUser = true;
var total = 20;
var name = 'John Doe';
// Template String
var sentence = "My name is " + name;
// null and undefined
var n = null;
var u = undefined;
// null and undefined is sub type of string , number, boolean. we can use null and undefined in string , number and boolean type. for example,
var isNew = null;
var myName = undefined;
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3]; // both approaches can be used
// mixed type
var person1 = ['John', 20];
// enum type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c); // output 1, we can do this enum Color {red = 5, green, blue}; now output is 6, bcz it starts now from 5
// any type 
var randomValue = 20;
randomValue = true;
randomValue = 'John';
// now if we call this variable as function, object it won't throw error, but it won't run, coz this is not function
// for example: 
// randomValue();
// we can also use unknown type ,
var randomValue2 = 20;
// now if we call it as function, object, even treated as string and if we apply any string method, it will throw error,
// for example :
// randomValue2.toUpperCase() it will throw error,
// but we can handle this, like : (randomeValue2 as string).toUpperCase()
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(randomValue2)) {
    console.log(randomValue2.name);
}
// multi type
var multiType;
multiType = 20;
multiType = true;
// function
function add(num1, num2) {
    return num1 + num2;
}
// if we put ? with argument, it will treat as optional, and will return it as undefined if we call as like add(5) , only one argument
// we can pass default parameters , as like 
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
}
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Diana"
};
fullName(p);
// Class 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('John Duueee');
emp1.greet();
// inheritence
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating works!");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Bruce Manager');
manager1.delegateWork();
manager1.greet();
console.log(message);
