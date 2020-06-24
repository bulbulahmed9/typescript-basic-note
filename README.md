<div>
    export { } <br>


<h3>// Variable declaration </h3>
let x = 20; <br>
const y = 15;  <br>

// variable type

let isUser: boolean = true;
let total: number = 20;
let name: string = 'John Doe';

// Template String

let sentence: string = `My name is ${name}`;

// null and undefined
let n: null = null;
let u: undefined = undefined;

// null and undefined is sub type of string , number, boolean. we can use null and undefined in string , number and boolean type. for example,
let isNew: boolean = null;
let myName: string = undefined;


// array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]; // both approaches can be used

// mixed type
let person1: [string, number] = ['John', 20];

// enum type
enum Color {red, green, blue};
let c: Color = Color.green;
console.log(c); // output 1, we can do this enum Color {red = 5, green, blue}; now output is 6, bcz it starts now from 5


// any type 
let randomValue: any = 20;
randomValue = true;
randomValue = 'John';
// now if we call this variable as function, object it won't throw error, but it won't run, coz this is not function
// for example: 
// randomValue();

// we can also use unknown type ,
let randomValue2 : unknown = 20;
// now if we call it as function, object, even treated as string and if we apply any string method, it will throw error,
// for example :
// randomValue2.toUpperCase() it will throw error,
// but we can handle this, like : (randomeValue2 as string).toUpperCase()

function hasName(obj: any): obj is {name: string}{
    return !!obj && typeof obj === 'object' && 'name' in obj
}

if(hasName(randomValue2)){
    console.log(randomValue2.name)
}

// multi type

let multiType : number | boolean;
multiType = 20;
multiType = true;

// function

function add(num1: number, num2?: number): number{ // function return type
    return num1 + num2;
}
// if we put ? with argument, it will treat as optional, and will return it as undefined if we call as like add(5) , only one argument
// we can pass default parameters , as like 
function add2(num1: number, num2: number = 20): number{ // function return type
    return num1 + num2;
}

// Interface 
// function fullName(person: {firstName: string, lastName: string}){
//     console.log(`${person.firstName} ${person.lastName}`)
// }

interface Person{
    firstName: string,
    lastName: string // if we put lastName?:  string, then it will be optional
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: "Bruce",
    lastName: "Diana"
}

fullName(p)

// Class 
class Employee{
    employeeName: string;  // private employeeName: string; // this is access modifier, we can't access this value outside of base class, if we put public, it will be accesible everywhere, if we put protected, it will accessible only base class, and derived class
    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('John Duueee');

emp1.greet();

// inheritence
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){
        console.log(`Manager delegating works!`)
    }
}

let manager1 = new Manager('Bruce Manager');

manager1.delegateWork();
manager1.greet();

console.log(message);
</div>