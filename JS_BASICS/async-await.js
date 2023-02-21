/////////////////////////////////////////////////////////////////////////////////
//
//   Any function defined as async will always return a promise
//
////////////////////////////////////////////////////////////////////////////////

console.log('1.Example - example of async - await');
const doWork= async()=>{
    return 'Andrew'
}

console.log(doWork())

console.log('\n\n--------------------------------------------------------------------------------\n\n');


// From this example, async will always return a promise
// So, whatever is returned can be processed as a promise

console.log('2.Example - calling using async');

doWork().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

///////////////////////////////////////////////////////////////////////////////////
//
//           Using the catch block to handle errors
//
///////////////////////////////////////////////////////////////////////////////////


console.log('3.Example - get the catch block to throw the error');

const doWork2 = async()=>{
    throw new Error(' Error block activated ')
}

doWork2().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


/////////////////////////////////////////////////////////////////////////////////
//
//   Await is designed to use promises
//
////////////////////////////////////////////////////////////////////////////////


console.log('4.Example - example of using promise');

const add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 2000);      
    })
}

const doAdd= async()=>{
    const sum = await add(1,99)
    return sum;
}

doAdd().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


/////////////////////////////////////////////////////////////////////////////////
//
//   When chaining promises async-await gives you a better syntax
//
////////////////////////////////////////////////////////////////////////////////


console.log('5. No chaining promises using await gives you a better syntax');


const doAdd2= async()=>{
    const sum = await add(1,99);
    const sum2 = await add(sum,10);
    const sum3 = await add(sum2, 10);
    return sum3;
}

doAdd2().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


/////////////////////////////////////////////////////////////////////////////////
//
//   What happens when one of the promises rejects instead of resolve
//
////////////////////////////////////////////////////////////////////////////////


console.log(' when a promise rejects ');

const addPostive=(a,b)=>{
    return new Promise((resolve, reject)=>{

        setTimeout(() => {

            if(a<0 || b<0){
                return reject('Number cannot be negative')
            }

            resolve(a+b)

        }, 2000);
        
    })
}

const doAdd3= async()=>{
    const sum = await addPostive(1,99);
    const sum2 = await addPostive(sum,-10);
    const sum3 = await addPostive(sum2, 10);
    return sum3;
}

doAdd3().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

