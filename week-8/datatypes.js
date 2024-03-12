// Datatypes - 
    // Strings - e.g. "John Doe", 'Hello World', "skill harvest", "43" 
    // Numbers - e.g. 43, 3.14, 0. 
    // Booleans - e.g. true, false
    // Arrays - e.g. [1, 2, 3, 4, 5], ['John', 'Jane', 'Doe']
    // Objects - e.g. {name: "John Doe"} 
    // Null - e.g. empty
    // Undefined - e.g. undefined - let x;

let a = "John Doe"; // string
let b = "Jane Smith"; // string
let c = 45; // numbers

// array- a collections of similar data types
let students = ["John Doe", "Esho Lekan", "Jane Smith", "Bruce Jo", "Mary Jane", "Peter Parker", "Clark Kent", "Bruce Wayne", "Tony Stark", "Steve Rogers", "Natasha Romanoff", "Wanda Maximoff", "Vision", "Thor", "Loki", "Hulk", "Black Panther", "Captain Marvel", "Nick Fury", "Agent Coulson", "Phil Coulson", "Maria Hill", "Pepper Potts", "Happy Hogan", "Ned Leeds", "Flash Thompson", "Betty Brant", "Gwen Stacy", "Miles Morales", "May Parker", "Ben Parker", "Harry Osborn", "Norman Osborn", "Doc Ock", "Green Goblin", "Sandman", "Venom", "Carnage", "Mysterio", "Vulture", "Shocker", "Scorpion", "Rhino", "Electro", "Kingpin", "Prowler", "Tombstone", "Chameleon", "Kraven the Hunter", "Black Cat", "Silver Sable", "Screwball", "Hammerhead", "Tinkerer", "Tarantula", "Jackal", "Hydroman", "Molten"]; 

// get the total number of students in the array
// console.log(students.length); 

// convert the array to a string)
// console.log(students.toString()); 

// array uses index to access its elements - index starts from 0 - index are numbers
console.log(students[34]); // John Doe

// object - a collection of key-value pairs
let car = {
    name: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red",
    isAutomatic: true,
    isElectric: false,
    isFourWheelDrive: true,
}

// Objects use keys to access its values
console.log(car.name); // Toyota