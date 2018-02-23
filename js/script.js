$(document).ready(function() {
    var input = parseInt(prompt("Enter Number"));//get input from the user and change its type to strict interger
    function pingPong(input){
        // loop over from one to the range given in on the input
        for (let i = 1; i <= input; i++) {
            //check the divisiblity of the input if either quaifies in any condition
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log("PingPong")
            } else if (i % 3 === 0) {
                console.log("ping");

            } else if (i % 5 === 0) {
                console.log("pong");
            } else {
                console.log(i)
            }
        }        
    }
    pingPong(input);
});