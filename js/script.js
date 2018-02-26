//business logic
var pingArray = [];

function pingPong(number) {
    if(number<=100){
        for (var index = 1; index <= number; index++) {
            if (index % 15 === 0) {
                pingArray.push("pingpong");
            }
            else if (index % 5 === 0) {
                pingArray.push("pong");
            }
            else if (index % 3 === 0) {
                pingArray.push("ping");
            }
            else {
                pingArray.push(index);
            }
        }
    }else{
        alert("enter number less than 100")
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
