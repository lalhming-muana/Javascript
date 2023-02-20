const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve([7,4,1])
        reject('Things went wrong!')
    }, 2000);
})

// here we can call only call resolve or reject

doWorkPromise.then((result)=>{
    console.log('Success',result);
}).catch((error)=>{
    console.log('Error',error);
})

// Example 2

const add=(a,b)=>{
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(a+b)
        }, 2000);
        
    })
}

add(1,2).then((sum)=>{

    console.log(sum);

    add(sum,5).then((sum)=>{
        console.log(sum);
    }).catch((e)=>{
        console.log(e);
    })

}).catch((e)=>{
    console.log(e);
})

// The code above is more difficult to read. SO let us rewrite the code

console.log('now the same code with promise chaining');


add(1,2).then((sum)=>{
    console.log(sum);
    return add(sum,5)
}).then((sum2)=>{
    console.log(sum2);
}).catch((e)=>{
    console.log(e);
})