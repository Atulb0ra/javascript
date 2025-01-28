// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// here the function inside this() is executed using another ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')