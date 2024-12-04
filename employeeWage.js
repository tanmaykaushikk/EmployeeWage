const attendance = () =>{
    const randomValue = Math.floor(Math.random()*2);    // either value to be 0 or 1.
    let isPresent;

    if(randomValue === 0){
        //assign true if present
        isPresent = true;        
    }else{
        // assign false if absent
        isPresent = false;
    }

    return isPresent;
    
}
console.log(attendance());

