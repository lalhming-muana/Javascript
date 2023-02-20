const doWorkCallback =(callback) => {

    setTimeout(() => {
        //callback('this is my error', undefined)
        callback(undefined, [7,4,1])
    }, 2000)

}

doWorkCallback(error, result) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}