
// Question 2
let myName: string = "Ifrah";

console.log(`Hello ${myName}, would you like to learn some Python today?`);



//Question 3
let myName1: string = "ifrah";

console.log(myName1.toLowerCase());
console.log(myName1.toUpperCase());
console.log(myName1[0].toUpperCase() + myName1.slice(1).toLowerCase());



//Question 4
let quote = "The future belongs to those who believe in the beauty of their dreams.";
let author = "Eleanor Roosevelt";

console.log(`${author} once said, “${quote}”`);



//Question 5
let famous_person: string = "Eleanor Roosevelt";
let quote1: string = "The future belongs to those who believe in the beauty of their dreams.";

let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);



//Question 6
let nameWithWhitespace: string = "\t  \n  ifrah farooqi  \t\n  ";
let strippedName: string = nameWithWhitespace.trim();

console.log(strippedName);



//Question 7
let number = 8

console.log (4+4);
console.log(15-7);
console.log(4*2);
console.log(56/7);



//Question 8
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)
console.log(5 + 3)



//Question 9
let favoriteNumber: number = 17;
let message1: string = `my favorite number is ${favoriteNumber}.`;

console.log(message1);



//Question 10

// Author: Ifrah Farooqi
// Date: 19-07-2024
// This program performs basic arithmetic operations (addition, subtraction, multiplication, and division) resulting in the number 8.

console.log(5 + 3);  
console.log(10 - 2);
console.log(4 * 2);   
console.log(16 / 2);



//Question 11
let names: string[] = ["ifrah", "ubaid", "sana", "usman"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);



//Question 12
let names1: string[] = ["ifrah Ubaid", "Ubaidullah Ansari", "Sana Usman", "M. Usman Khan"];

names1.forEach(name => {
    console.log("Hello, " + name + "! Hope you're having a great day!");
});



//Question 13
let favoriteTransportations: string[] = ["Sonata car", "Civic car", "Land Crusier"];

favoriteTransportations.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});



//Question 14
let guestList: string[] = ["Ifrah", "Sana", "Khansa", "Maryam"];

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. I look forward to your company.`);
});



//Question 15
// Initial guest list
let guestList1: string[] = ["Ifrah", "Sana", "Khansa", "Maryam"];

// original invitation messages
guestList1.forEach(guest1 => {
    console.log(`Dear ${guest1}, you are cordially invited to dinner. I look forward to your company.`);
});

// Guest who can't make it
let guestWhoCantMakeIt: string = "Ifrah";

// Print statement about the guest who can't make it
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
let newGuest1: string = "yumna";
guestList1[guestList1.indexOf(guestWhoCantMakeIt)] = newGuest1;

// Print new invitation messages
guestList1.forEach(guest1 => {
    console.log(`Dear ${guest1}, you are cordially invited to dinner. I look forward to your company.`);
});



//Question 16
// Initial guest list
let guestList2: string[] = ["Ifrah", "Sana", "Khansa", "Maryam"];

// Print original invitation messages
guestList2.forEach(guest2 => {
    console.log(`Dear ${guest2}, you are cordially invited to dinner. I look forward to your company.`);
});

// Guest who can't make it
let guestWhoCantMakeIt1: string = "Ifrah";

// Print statement about the guest who can't make it
console.log(`\nUnfortunately, ${guestWhoCantMakeIt1} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
guestList2[guestList2.indexOf(guestWhoCantMakeIt1)] = "Yumna";

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table and have more space for additional guests.\n");

// Add more guests
guestList2.unshift("Hifza"); // Add to the beginning
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Raima"); // Add to the middle
guestList2.push("sheema"); // Add to the end

// Print new invitation messages
guestList2.forEach(guest2 => {
    console.log(`Dear ${guest2}, you are cordially invited to dinner. I look forward to your company.`);
});



//Question 17
// Initial guest list
let guestList3: string[] = ["Ifrah", "Sana", "Khansa", "Maryam"];

// Print original invitation messages
guestList3.forEach(guest3 => {
    console.log(`Dear ${guest3}, you are cordially invited to dinner. I look forward to your company.`);
});

// Guest who can't make it
let guestWhoCantMakeIt2: string = "Ifrah";

//statement about the guest who can't make it
console.log(`\nUnfortunately, ${guestWhoCantMakeIt2} can't make it to the dinner.\n`);

// Replace the guest who can't make it with a new guest
guestList3[guestList3.indexOf(guestWhoCantMakeIt2)] = "Yumna";

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table and have more space for additional guests.\n");

// Add more guests
guestList3.unshift("Hifza"); // Add to the beginning
guestList3.splice(Math.floor(guestList3.length / 2), 0, "Raima"); // Add to the middle
guestList3.push("Sheema"); // Add to the end

// new invitation messages
guestList3.forEach(guest3 => {
    console.log(`Dear ${guest3}, you are cordially invited to dinner. I look forward to your company.`);
});

// Inform about shrinking the guest list
console.log("\nDue to a change in plans, we can only invite two people to dinner.\n");

// Remove guests until only two remain
while (guestList3.length > 2) {
    let removedGuest = guestList3.pop(); // Remove the last guest
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// messages to the two guests who are still invited
guestList3.forEach(guest3 => {
    console.log(`Dear ${guest3}, you are still invited to dinner. I look forward to your company.`);
});

// Remove the last two names from the list
guestList3 = []; // Empty the list

// Print the list to ensure it is empty
console.log("Final guest list:", guestList3);



//Question 18
// Array of places to visit
let places: string[] = ["Canada", "Paris", "Turkey", "Sydney", "Australia"];

// Print the array in its original order
console.log("Original order:");
console.log(places);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...places].sort());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// Print the array in reverse alphabetical order without modifying the original list
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// Reverse the order of the list and print
places.reverse();
console.log("\nOrder after reversing:");
console.log(places);

// Reverse the order of the list again and print
places.reverse();
console.log("\nOrder after reversing back to original:");
console.log(places);

// Sort the array in alphabetical order and print
places.sort();
console.log("\nOrder after sorting alphabetically:");
console.log(places);

// Sort the array in reverse alphabetical order and print
places.sort().reverse();
console.log("\nOrder after sorting in reverse alphabetical order:");
console.log(places);



//Question 19
// Question 1: Guest List

// Array of guests
let guests: string[] = ["Ifrah", "Sana"];

// Print invitation messages for each guest
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. I look forward to your company.`);
});

// Print the number of people invited to dinner
console.log(`\nTotal number of people invited to dinner: ${guests.length}`);


// Question 2: Seeing the World

// Array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

// Print the array in its original order
console.log("\nOriginal order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list and print
placesToVisit.reverse();
console.log("\nOrder after reversing:");
console.log(placesToVisit);

// Reverse the order of the list again and print
placesToVisit.reverse();
console.log("\nOrder after reversing back to original:");
console.log(placesToVisit);

// Sort the array in alphabetical order and print
placesToVisit.sort();
console.log("\nOrder after sorting alphabetically:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order and print
placesToVisit.sort().reverse();
console.log("\nOrder after sorting in reverse alphabetical order:");
console.log(placesToVisit);



//Question 20
// Example: Array of favorite books
let favoriteBooks: string[] = [
    "Quran",
    "Seerah tun Nabi",
    "Seerah Sahbah",
    "Jannat k Pattey"
];

// Print the list of favorite books
console.log("List of my favorite books:");
favoriteBooks.forEach(book => {
    console.log(book);
});

// Example: Array of cities
let cities1: string[] = [
    "Turkey",
    "Maldives",
    "Canada",
    "Dubai"
];

// Print the list of cities
console.log("\nList of cities I want to visit:");
cities1.forEach(city => {
    console.log(city);
});

// Example: Array of languages
let languages: string[] = [
    "Arabic",
    "Turkish",
    "English",
    "French"
];

// Print the list of languages
console.log("\nList of languages I want to learn:");
languages.forEach(language => {
    console.log(language);
});



//Question 21
// Define the structure of a SeerahBook object using an interface
interface SeerahBook {
    title: string;
    author: string;
    year: number;
}

// list of SeerahBook objects
let seerahBooks: SeerahBook[] = [
    {
        title: "Ar-Raheeq Al-Makhtum",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1976
    },
    {
        title: "In the Footsteps of the Prophet",
        author: "Tariq Ramadan",
        year: 2006
    },
    {
        title: "Muhammad: His Life Based on the Earliest Sources",
        author: "Martin Lings",
        year: 1983
    },
    {
        title: "When the Moon Split",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 2002
    }
];

// Print the details of each Seerah book
console.log("List of Seerah books:");
seerahBooks.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
});



//Question 22
// Code with Intentional Error

// Define the structure of a SeerahBook object using an interface
interface SeerahBook {
    title: string;
    author: string;
    year: number;
}

let seerahBooks1: SeerahBook[] = [
    {
        title: "The Sealed Nectar",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1976
    },
    {
        title: "Ar-Raheeq Al-Makhtum",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1996
    },
    {
        title: "In the Footsteps of the Prophet",
        author: "Tariq Ramadan",
        year: 2007
    },
    {
        title: "Muhammad: His Life Based on the Earliest Sources",
        author: "Martin Lings",
        year: 1983
    },
    {
        title: "When the Moon Split",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1998
    }
];

// Intentional error: Trying to access an index that doesn't exist
console.log("Accessing an out-of-bounds index:");
console.log(seerahBooks1[5]); 


// Corrected Code

// Define the structure of a SeerahBook object using an interface
interface SeerahBook {
    title: string;
    author: string;
    year: number;
}

// Create a list of SeerahBook objects
let seerahBooks2: SeerahBook[] = [
    {
        title: "The Sealed Nectar",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1976
    },
    {
        title: "Ar-Raheeq Al-Makhtum",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1996
    },
    {
        title: "In the Footsteps of the Prophet",
        author: "Tariq Ramadan",
        year: 2007
    },
    {
        title: "Muhammad: His Life Based on the Earliest Sources",
        author: "Martin Lings",
        year: 1983
    },
    {
        title: "When the Moon Split",
        author: "Safī-ur-Rahmān al-Mubārakpūrī",
        year: 1998
    }
];

// Correcting the error by accessing a valid index
console.log("\nCorrecting the error:");
console.log(seerahBooks2[4]); // This should print the details of the last book in the array



// //Question 23

// Series of conditional tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');  // True

console.log("Is car == 'aeroplane'? I predict False.");
console.log(car == 'aeroplane');  // False

let bike = 'yamaha';
console.log("Is bike == 'yamaha'? I predict True.");
console.log(bike == 'yamaha');  // True

console.log("Is bike == 'laptop'? I predict False.");
console.log(bike == 'laptop');  // False

let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');  // True

console.log("Is fruit == 'slippers'? I predict False.");
console.log(fruit == 'slippers');  // False

let city = 'New York';
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');  // True

console.log("Is city == 'bangles'? I predict False.");
console.log(city == 'bangles');  // False

let country = 'Canada';
console.log("Is country == 'Canada'? I predict True.");
console.log(country == 'Canada');  // True

console.log("Is country == 'water'? I predict False.");
console.log(country == 'water');  // False

// Additional conditional tests
let a = 10;

console.log("Is a == 10? I predict True.");
console.log(a == 10);  // True

console.log("Is a <2 ? I predict False.");
console.log(a <2 );  // False

console.log("Is a != 5? I predict True.");
console.log(a != 5);  // True

console.log("Is a !== '1'? I predict True.");
console.log(a != 1);  // True

console.log("Is a < 20? I predict True.");
console.log(a < 20);  // True

console.log("Is a > 59? I predict False.");
console.log(a > 59);  // False

console.log("Is a <= 10? I predict True.");
console.log(a <= 10);  // True

console.log("Is a >= 15? I predict False.");
console.log(a >= 15);  // False



// //Question 24
// Tests for equality and inequality with strings
let fruit1 = 'Apple';
console.log("Is fruit1 == 'Apple'? I predict True.");
console.log(fruit1 == 'Apple');  // True

console.log("Is fruit1 != 'Orange'? I predict True.");
console.log(fruit1 != 'Orange');  // True

console.log("Is fruit1 == 'apple'? I predict False.");
console.log(fruit1 == 'apple');  // False

// Tests using the lower case function
let color = 'Blue';
console.log("Is color.toLowerCase() == 'blue'? I predict True.");
console.log(color.toLowerCase() == 'blue');  // True

console.log("Is color.toLowerCase() == 'Blue'? I predict False.");
console.log(color.toLowerCase() == 'Blue');  // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number2 = 10;
console.log("Is number2 == 10? I predict True.");
console.log(number2 == 10);  // True

console.log("Is number2 != 5? I predict True.");
console.log(number2 != 5);  // True

console.log("Is number2 > 5? I predict True.");
console.log(number2 > 5);  // True

console.log("Is number2 < 15? I predict True.");
console.log(number2 < 15);  // True

console.log("Is number2 >= 10? I predict True.");
console.log(number2 >= 10);  // True

console.log("Is number2 <= 10? I predict True.");
console.log(number2 <= 10);  // True

console.log("Is number2 > 15? I predict False.");
console.log(number2 > 15);  // False

console.log("Is number2 < 5? I predict False.");
console.log(number2 < 5);  // False

console.log("Is number2 >= 15? I predict False.");
console.log(number2 >= 15);  // False

console.log("Is number2 <= 5? I predict False.");
console.log(number2 <= 5);  // False

// Tests using "and" and "or" operators
let age = 20;
console.log("Is age > 10 and age < 30? I predict True.");
console.log(age > 10 && age < 30);  // True

console.log("Is age > 25 or age < 30? I predict True.");
console.log(age > 25 || age < 30);  // True

console.log("Is age > 25 and age < 30? I predict False.");
console.log(age > 25 && age < 30);  // False

console.log("Is age > 10 or age < 15? I predict True.");
console.log(age > 10 || age < 15);  // True

// Test whether an item is in an array
let fruits1 = ['Apple', 'Banana', 'Mango'];
console.log("Is 'Apple' in fruits1? I predict True.");
console.log(fruits1,('Apple'));  // True

console.log("Is 'Grapes' in fruits1? I predict False.");
console.log(fruits1,('Grapes'));  // False

// Test whether an item is not in an array
let cities2 = ['Paris', 'London', 'New York'];
console.log("Is 'Tokyo' not in cities2? I predict True.");
console.log(!cities2,('Tokyo'));  // True

console.log("Is 'London' not in cities2? I predict False.");
console.log(!cities2,('London'));  // False



// //Question 25
// Version that passes the if test
let alien_color1: string = 'green';

if (alien_color1 === 'green') {
  console.log("You just earned 5 points!");
}

// Version that fails the if test (no output)
let alien_color2: string = 'red';

if (alien_color2 === 'green') {
  console.log("You just earned 5 points!");
}


// //Question 26
// Version that runs the if block
let alien_color3: string = 'green';

if (alien_color3 === 'green') {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

// Version that runs the else block
let alien_color4: string = 'red';

if (alien_color4 === 'green') {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}



// //Question 27
// Version 1: Alien color is green
let alien_color5: string = 'green';

if (alien_color5 === 'green') {
  console.log("You just earned 5 points for shooting the green alien!");
} else if (alien_color5 === 'yellow') {
  console.log("You just earned 10 points for shooting the yellow alien!");
} else if (alien_color5 === 'red') {
  console.log("You just earned 15 points for shooting the red alien!");
}

// Version 2: Alien color is yellow
let alien_color6: string = 'yellow';

if (alien_color6 === 'green') {
  console.log("You just earned 5 points for shooting the green alien!");
} else if (alien_color6 === 'yellow') {
  console.log("You just earned 10 points for shooting the yellow alien!");
} else if (alien_color6 === 'red') {
  console.log("You just earned 15 points for shooting the red alien!");
}

// Version 3: Alien color is red
let alien_color7: string = 'red';

if (alien_color7 === 'green') {
  console.log("You just earned 5 points for shooting the green alien!");
} else if (alien_color7 === 'yellow') {
  console.log("You just earned 10 points for shooting the yellow alien!");
} else if (alien_color7 === 'red') {
  console.log("You just earned 15 points for shooting the red alien!");
}



// //Question 28
let age2: number = 25;

if (age2 < 2) {
  console.log("The person is a baby.");
} else if (age2 >= 2 && age2 < 4) {
  console.log("The person is a toddler.");
} else if (age2 >= 4 && age2 < 13) {
  console.log("The person is a kid.");
} else if (age2 >= 13 && age2 < 20) {
  console.log("The person is a teenager.");
} else if (age2 >= 20 && age2 < 65) {
  console.log("The person is an adult.");
} else if (age2 >= 65) {
  console.log("The person is an elder.");
}



// //Question 29
// Array of favorite fruits
let favorite_fruits2: string[] = ['Mango', 'Apple', 'Banana'];

// Check for certain fruits in the array
if (favorite_fruits2.indexOf('Mango') !== -1) {
  console.log('You really like Mangoes!');
}

if (favorite_fruits2.indexOf('Apple') !== -1) {
  console.log('You really like Apples!');
}

if (favorite_fruits2.indexOf('Banana') !== -1) {
  console.log('You really like Bananas!');
}

if (favorite_fruits2.indexOf('Strawberry') !== -1) {
  console.log('You really like Strawberries!');
}

if (favorite_fruits2.indexOf('Pineapple') !== -1) {
  console.log('You really like Pineapples!');
}



// //Question 30
// Array of usernames, including 'admin'
let usernames2: string[] = ['Ifrah', 'Sana', 'Maryam', 'Khansa', 'Yumna'];

// Loop through the array and print a greeting
for (let username2 of usernames2) {
  if (username2 === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username2}, thank you for logging in again.`);
  }
}



// //Question 31
// Array of usernames, initially empty
let usernames3: string[] = [];

// Check if the list is empty
if (usernames3.length === 0) {
  console.log('We need to find some users!');
} else {
  // Loop through the array and print a greeting
  for (let username3 of usernames3) {
    if (username3 === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${username3}, thank you for logging in again.`);
    }
  }
}



// //Question 32
// List of current usernames
let current_users: string[] = ['Ifrah', 'Sana', 'Maryam', 'Khansa', 'Yumna'];

// List of new usernames
let new_users: string[] = ['ifrah', 'sana', 'Hifza', 'Raima', 'sana'];

// Function to check if a username is already taken
function isUsernameTaken(username: string, users: string[]): boolean {
    return users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Check each new username
for (let new_user of new_users) {
    if (isUsernameTaken(new_user, current_users)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}



// //Question 33
// Array of numbers from 1 to 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    let ordinal: string;

    // Determine the ordinal suffix
    if (number === 1) {
        ordinal = '1st';
    } else if (number === 2) {
        ordinal = '2nd';
    } else if (number === 3) {
        ordinal = '3rd';
    } else {
        ordinal = number + 'th';
    }

    // Print the ordinal number
    console.log(ordinal);
}




// //Question 34
// Array of favorite pizzas
let favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Loop through the array and print a sentence for each pizza
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional line outside the loop
console.log('I really love pizza!');



// //Question 35
// Array of animals with a common characteristic
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Loop through the array and print a statement for each animal
for (let animal of animals) {
    console.log(`${animal} would make a great pet.`);
}

// Additional line outside the loop
console.log('Any of these animals would make a great pet!');



// //Question 36
// Function to create a shirt with a specified size and message
function makeShirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
}

// Call the function with example parameters
makeShirt('M', 'Hello, World!');
makeShirt('L', 'TypeScript is awesome!');



// //Question 37
// Function to create a shirt with a specified size and message, with default values
function makeShirt1(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
}

// Make a large shirt with the default message
makeShirt1();

// Make a medium shirt with the default message
makeShirt1('M');

// Make a shirt of any size with a different message
makeShirt1('S', 'Hello, World!');
makeShirt1('XL', 'TypeScript is awesome!');



// //Question 38
// Function to describe a city with its country, with a default country value
function describeCity(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity('New York');  // Uses default country
describeCity('Los Angeles');  // Uses default country
describeCity('Tokyo', 'Japan');  // Specifies a different country
describeCity('Paris', 'France');  // Specifies a different country



// //Question 39
// Function to format city and country names
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the results
const city1 = cityCountry('Lahore', 'Pakistan');
const city2 = cityCountry('New York', 'USA');
const city3 = cityCountry('Tokyo', 'Japan');

console.log(city1);  // Lahore, Pakistan
console.log(city2);  // New York, USA
console.log(city3);  // Tokyo, Japan



// //Question 40
// Function to create an album object
function makeAlbum(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three album objects
const album1 = makeAlbum('Atif Aslam', 'Jal Pari');
const album2 = makeAlbum('Nusrat Fateh Ali Khan', 'Mast Qalandar');
const album3 = makeAlbum('Vital Signs', 'Hum Tum', 10);

// Printing the album objects
console.log(album1);
console.log(album2); 
console.log(album3); 



// //Question 41
// Define an array of magician names
const magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Dynamo', 'David Blaine'];

// Function to print the name of each magician in the array
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

showMagicians(magicians);



// //Question 42
// Function to show magicians' names
function showMagicians1(magicians1: string[]) {
    for (let magician1 of magicians1) {
        console.log(magician1);
    }
}

// Function to add "the Great" to each magician's name
function makeGreat(magicians1: string[]): string[] {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = `the Great ${magicians1[i]}`;
    }
    return magicians1;
}

// Array of magician names
let magicians1: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Modify the magicians' names
let greatMagicians = makeGreat(magicians1);

// Show the modified magicians1' names
showMagicians1(greatMagicians);



// //Question 43
// Function to show magicians' names
function showMagicians2(magicians2: string[]) {
    for (let magician2 of magicians2) {
        console.log(magician2);
    }
}

// Function to add "the Great" to each magician's name
function makeGreat1(magicians2: string[]): string[] {
    let greatMagicians1 = magicians2.slice(); // Create a copy of the array
    for (let i = 0; i < greatMagicians1.length; i++) {
        greatMagicians1[i] = `the Great ${greatMagicians1[i]}`;
    }
    return greatMagicians1;
}

// Array of magician names
let magicians2: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Make a copy of the original array and modify it
let greatMagicians1 = makeGreat(magicians2);

// Show the original magicians' names
console.log('Original Magicians:');
showMagicians(magicians2);

// Show the modified magicians' names
console.log('\nGreat Magicians:');
showMagicians(greatMagicians1);



// //Question 44
// Function to print a sandwich order summary
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log(""); // Adding an extra line for better readability
}

// Calling the function with different numbers of arguments
console.log("Order 1:");
makeSandwich('Chicken', 'Lettuce', 'Tomato', 'Mayo');

console.log("Order 2:");
makeSandwich('Beef', 'Cheese', 'Onion', 'Pickles', 'Mustard');

console.log("Order 3:");
makeSandwich('Paneer', 'Cucumber', 'Tomato', 'Green Chili', 'Mint Chutney', 'Onion');



// //Question 45
// Function to create a car object with additional attributes
function createCar(manufacturer: string, model: string, ...attributes: [string, any][]): object {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional attributes to the car object
    for (let [key, value] of attributes) {
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
let car1 = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
let car2 = createCar('Honda', 'Civic', ['color', 'red'], ['features', ['sunroof', 'navigation']]);
let car3 = createCar('Ford', 'Mustang', ['year', 2023], ['engine', 'V8']);

// Print the car objects to verify information
console.log(car1);
console.log(car2);
console.log(car3);

