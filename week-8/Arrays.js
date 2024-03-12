//LIFO 

const plates = ['plate1', 'plate2', 'plate3', 'plate4', 'plate5'];

console.log("initial list of plates - ", plates);
plates.pop(); // remove the last plate
console.log("list of plates after removal - ", plates);

plates.push('plate6'); // add a new plate to the end of the list
console.log("list of plates after addition - ", plates);


// plate5 - 4
// plate4 - 3
// plate3 - 2
// plate2 - 1
// plate1 - 0
