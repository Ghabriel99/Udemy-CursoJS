function soma (x,y){
    if (
        typeof x !== 'number' || typeof y !== 'number'
        
    
    ) {
        throw new SyntaxError('X e Y must be numbers')
    }

    return x+y;
}


try {
    console.log(soma(''))
} catch (error) {
    console.log(error);

}

