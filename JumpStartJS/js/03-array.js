// Mutator Methods
var tasks = [
             "Pay phone bill",
             "Write best-selling novel",
             "Walk the dog"
            ];

// pop
// Remove the last element from array and returns it
tasks.pop();
//returns "Walk the dog"

// push
// Add new item to the end of array and returns the new length
tasks.push("Feed the cat");
// returns 4

// shift
// Remove the first item from array and returns it
tasks.shift();
// returns 4

// sort
// Sorts the array items and list them in ascending order
tasks.sort();

// splice
// Add and remove items from the array with the same command
// remove [index] [howMany], [add items]
tasks.splice(1, 1, "World domination")

// unshift
// Add one or more items to the beginning of the array and returns the new length
tasks.unshift("Defeat nemesis", "Pick up dry cleaning");
// returns 5


// Accessor Methods

// contact
// Combine two or more arrays into one
var arr1, arr2, arr3, arr4;
arr1 = ["Pay mobile bill"];
arr2 = ["Write best-selling novel"];
arr3 = ["Walk the dog"];
arr4 = arr1.concat(arr2, arr3);

// join
// Takes the values from one array and joins them into a string
var nums = [4, 8, 15, 16, 23, 42];
alert("The winning lottery numbers are: " + nums.join(", "));
// alert content
// The winning lottery numbers are: 4, 8, 15, 16, 23, 42

// slice
// Copies a part of an array and returns it
// slice(#1, #2) = from index[1] to index[2]

var tasks, todo, cleanUp, noCleaning;
tasks = [
     "Fly a kite",
     "Save the world",
     [
	  "Clean bathroom",
	  "Clean garage",
	  "Clean up act"
	 ]
	];
todo = tasks.slice(0);         // copies tasks
cleanUp = tasks.slice(-1);     // copies only the nested array
noCleaning= tasks.slice(0, 2)  // copies from index[0] to index[2]

// toString
// returns a string with the array items
var arr = ["These", "words", "are", "separeted", "by", "commas"];
arr.toString();   // returns "These,words,are,separeted,by,commas"

// indexOf / lastIndexOf
// Finds the first/last instance of an item and returns its index
// array.indexOf(searchElement, [fromIndex]);
// array.lastIndexOf(searchElement, [fromIndex]);
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "a", "b", "c", "d"];
alphabet.indexOf("b");     // returns 1
alphabet.indexOf("b", 6);  // returns 8
alphabet.lastIndexOf("b");     // returns 8
alphabet.lastIndexOf("b", 6);  // returns 1
