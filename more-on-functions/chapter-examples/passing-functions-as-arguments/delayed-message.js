function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);

setTimeout(function(){
    console.log("Anonymous function delayed.");
}, 5500);