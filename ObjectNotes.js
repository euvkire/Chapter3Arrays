//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 4078234,
};

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

// add a new entry
contacts.sis = 237844;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called ___ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a==b);
console.log(a==c);
console.log(b==c);

console.log(a.value == c.value);

//create 5 objects below;
let dog = {
    dogName: 'Zelda',
    Breed: 'Terrier',
    Age: 9,
    size: 'medium',
    barks: true
};
console.log(dog);

let Person = {
    Person: 'DOOFIUS',
    Height: '5,1',
    Age: 15,
    weight: '100',
    Mexican: false
};
console.log(Person);

let Superman = {
    Person: 'Clark',
    Height: '6,1',
    Age: 34,
    weight: '150',
    Trash: true
};
console.log(Superman);