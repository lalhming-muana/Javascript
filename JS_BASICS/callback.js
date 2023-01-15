/**
 * A callback is a function that is passed as an argument
 * to  another function
 */

setTimeout(() => {
    console.log("Inside the timer function.");
}, 2000);

// in the code above the callback is written as 
// ()=>{} . This is the format. Now if the function has a parameter it is invoked like this

const helloTihna=(hming, veng) =>{
    console.log(" Hello "+hming+" of "+veng);
}

//setTimeout(hming("thanga","aizawl"),200) this code will return error because the syntax is wrong

setTimeout(helloTihna, 4000, "Thanga","Aizawl");


//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                    EXAMPLE 2
//////////////////////////////////////////////////////////////////////////////////////////////////////


const names = ['jesse','jenny','john','lisa'];

//names.forEach((name)=> console.log(name));

// Now we write our own forEach function

const myForEach=(arr, callback) =>{
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        callback(element);
    }

}
// As you can see the callback function is not defined whil writing myForEach

myForEach(names,(name)=>{
    console.log(name);
})

// The callback functionis defined while calling it.