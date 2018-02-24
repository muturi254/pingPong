// var input = parseInt(prompt("Enter Number"));//get input from the user and change its type to strict interger
function pingPong(userInput) {
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
pingPong(input)
$(document).ready(function() {
    $(form).submit(function(event) {
        var userInput = $("#input").val()
        pingPong(userInput);        
        event.preventDefault();//prevent form from behaving normally
    })
});