const person1 = {
    name: 'sarah',
    age: 30,
    address: {
        street: 'balfor',
        number: 30,
        city: 'Tel-Aviv'
    }
}

const person2 = {
    name: 'sarah',
    age: 30,
}

const getCityfromObject = (person) => {
    // try {
    // const step1 = person.address;
    // console.log(step1)
    // const step2 = step1.city;
    // console.log(step2)    


    const city = person.address?.city;
    if (city) {
        return city;
    } else {
        return "Unknown";
    }


    // const city = person.address && person.address.city;
    // if (city) {
    //     return city;
    // } else {
    //     return "Unknown";
    // }


    // let city;
    // if (person.address && person.address.city) {
    //     city = person.address.city
    //     return city;
    // } else {
    //     return "Unknown"
    // }


    // try {
    //     const city = person.address.city
    //     return city;
    // } catch (error) {
    //     return "Unknown"
    // }

}

const city = getCityfromObject(person2);
console.log('[CITY]: ', city)