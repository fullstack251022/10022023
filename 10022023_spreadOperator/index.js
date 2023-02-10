// Targil Create 3 different arrays with 3 different types and values (array of strings , array of numbers , array of objects)
// create function that will combine values of 3 arrays and return the new array
// in the end you have to send arrays to function and print new array 


const arrOfStrings = ["Sarah", "Jhon", "Ryu"];
const arrOfNumbers = [1, 3, 7];
const arrOfObjects = [{ name: 'Beni', age: 18 }, { name: 'Moshe', age: 40 }]


const arrayMerger = (arr1, arr2, arr3) => {
    const mergedArray = [...arr1, ...arr2, ...arr3];
    return mergedArray;
}

const newArray = arrayMerger(arrOfNumbers, arrOfStrings, arrOfObjects);
console.log(newArray);




// const originalArray = [1, 3, 5];
// const copyArray = [...originalArray];
// copyArray[0] = 'beni';
// console.log(copyArray);
// console.log(originalArray);


// const originalArray = [1, 3, 5];
// const copyArray = originalArray;
// copyArray[0] = 'beni';
// console.log(copyArray)
// console.log(originalArray)


// const myObject = { name: "Sarah", age: 20, lastName: "Conor" };

// const copyObject = { ...myObject, gender: 'female' };
// console.log(copyObject);


// const myArray = ["Sarah", "Jhon", "Ryu"];

// const changeArrayValue = (arr) => {
//     const copyArray = [...arr]
//     copyArray[0] = 'xxx';
//     console.log(copyArray[0]);
//     // arr[0] = 'xxxx';
//     // console.log(arr[0])
// }

// changeArrayValue(myArray);
// console.log(myArray[0])


// // for (const element of myArray) {
// //     secondArray.push(element)
// // }

// // console.log(secondArray)