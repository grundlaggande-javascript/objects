// 1. Creating objects

// Using object literal
const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};

// 2. Accessing and modifying properties
console.log(person.name); // Alice
person.age = 31; // Update a property
console.log(person.age); // 31

student.grade = 'A+'; // Modify a property dynamically
console.log(student.grade); // A+

// 3. Adding new properties dynamically
person.hobby = 'Reading';
console.log(person.hobby); // Reading

// Deleting a property
delete person.occupation;
console.log(person.occupation); // undefined

// 4. Iterating over object properties

// Using for...in loop
console.log("Person object:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Using Object.keys(), Object.values(), Object.entries()
console.log("Keys of person:", Object.keys(person)); // ['name', 'age', 'hobby']
console.log("Values of person:", Object.values(person)); // ['Alice', 31, 'Reading']
console.log("Entries of person:", Object.entries(person)); // [['name', 'Alice'], ['age', 31], ['hobby', 'Reading']]

