
// const myFunction = (name = 'Unknown') => {
//     console.log(name)
// }

// myFunction('Beni')




const person = {
    firstName: "Sarah",
    age: 30,
    lastName: "Conor",
    address: {
        street: 'Balfor-5',
        city: 'Tel-Aviv'
    }
};

const myFunction = ({ firstName, age, address, lastName = "Bullock" }) => {
    // const firstName = person.firstName;
    // const age = person.age;
    // const city = person.city;

    // const { firstName: fName, age, address, address: { city: myCity } } = person;


    console.log(firstName);
    console.log(age);
    console.log(address);
    console.log(lastName);
}


myFunction(person);




// const myArray = ['Elephant', 10, "apple", 'blebla', 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const a = myArray[0];
// // const b = myArray[1];
// // const c = myArray[2];

// const [a, b, c] = myArray;

// console.log(a)
// console.log(b)
// console.log(c)


// console.log(rest)


// const person = {
//     firstName: "Sarah",
//     age: 30, lastName: "Conor",
//     address: {
//         street: 'Balfor-5',
//         city: 'Tel-Aviv'
//     }
// };


// const myFunction = (person) => {
//     // const firstName = person.firstName;
//     // const age = person.age;
//     // const city = person.city;

//     const { firstName: fName, age, address, address: { city: myCity } } = person;


//     console.log(fName);
//     console.log(age);
//     console.log(address);
//     console.log(myCity)
//     // console.log(address);
// }


// myFunction(person);