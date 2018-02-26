// // var input = parseInt(prompt("Enter Number"));//get input from the user and change its type to strict interger
// function pingPong(userInput) {
//     // loop over from one to the range given in on the input
//     for (let i = 1; i <= input; i++) {
//         //check the divisiblity of the input if either quaifies in any condition
//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log("PingPong")
//         } else if (i % 3 === 0) {
//             console.log("ping");

//         } else if (i % 5 === 0) {
//             console.log("pong");
//         } else {
//             console.log(i)
//         }
//     }
// }
// pingPong(input)
// $(document).ready(function() {
//     $(form).submit(function(event) {
//         var userInput = $("#input").val()
//         pingPong(userInput);        
//         event.preventDefault();//prevent form from behaving normally
//     })
// });
var pingArray = [];

function pingPong(number) {
    if(number <= 100){
        for (var index = 1; index <= number; index += 1) {
            if (index % 15 === 0) {
                pingArray.push("pingpong");
            } else if (index % 5 === 0) {
                pingArray.push("pong");
            } else if (index % 3 === 0) {
                pingArray.push("ping");
            } else {
                pingArray.push(index);
            }
        }
    }else{
        alert("enter Number less than or equal to 100");
    }
}


//user interface logic

$(document).ready(function () {
    $("form#ping-pong").submit(function (event) {
        event.preventDefault();
        var number = parseInt($("input#number").val());

        pingPong(number);

        pingArray.forEach(function (number) {
            $("#output").append('<li>' + number + "</li>");
        });
    });
});
