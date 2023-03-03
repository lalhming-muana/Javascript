const alphabets = ['A','B','C','D','E','F'];

const numbers = ['1','2','3','4','5','6'];

// To illustrate the importance of this concept consider the two arrays above
// we can get the first and second element like this.
// const a = alpahbets[0]
// const b = alphabets[1]

// Now we can do the same thing in a shorter way like this:

// const [a,b] = alphabets;
// console.log('a ',a,' b ',b);

// Now if we want to skip the second element and get the 1st adn 3rd

// const [first,,third] = alphabets;
// console.log(first,' and ',third);

// Now if we want to get the first , the third and the rest of the array, we use spread operator

//const [a,,c, ...rest] = alphabets;

//console.log(a,' ',c,' ',rest);

// Now we also get the entire array using a spread operator as shown below:


const newArray = [...alphabets];
console.log(newArray);


// Now let us see how we an use array destructuting in a function



function sumAndMultiply(a,b){
    return [a+b, a*b];
}


const [sum,multiply, division=' Not defined in function'] = sumAndMultiply(2,3);
console.log(sum);
console.log(multiply);
console.log(division);


// Now let us try to understand how to destructure objects.

const aPerson={
    name: 'sally',
    age: 34,
    address:{
        city: 'Aizawl',
        state: 'Mizoram'
    }
}

// If we want to user the variable name as name we use the follwing syntax

const {name, age, address} = aPerson;

console.log(name, age, address);

const {name: hming, age: kum} = aPerson;

console.log(hming, kum);

// Also we can destructure the rest of the object.

const {name: hmingPum, ...aBakZawng} = aPerson;

console.log(hmingPum, aBakZawng);

// We can also destructure nested objects.

const {name:naam, address: {city: khua, state: kanRam}}= aPerson;

console.log(khua, kanRam);

