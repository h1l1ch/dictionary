// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;

let userName: string | string[] = 'Philip';

let isInstructor: boolean = false;

// More complex types

let hobbies: string[] = ['Sports', 'Cooking'];

// Type Aliase 
type Person = {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Philip',
    age: 24
};

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide"; // TypeSciprt assigns 'string' type to course

course = 1234; // Type inference

// Functions & types

function add(a: number, b: number) {
    return a + b;
};

function printOutput(value: any) {
    console.log(value);
};

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');