function greet(firstName='John', lastName='Doe'){
    console.log('Hello ',firstName, ' ',lastName);
}
greet()



// Using function like a variable and so put ; at the end

const squareNumber = function(x=2){
    console.log(x*x);
};
squareNumber(4);


// Immediately invokable functions expressions IIFEs
(function(name){
    console.log(' Hello ', name);
})('Howard');
