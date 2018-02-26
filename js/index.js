//user interface logic

// waiting for the document to load
$(document).ready(function () {

    //search for the event
    $(“#button”).click(function (event) {
        //fetch input from the input field
        var input = parseInt($(“#input”).val());
        console.log(input);
        //outputing the answer
        function finalOutput() {
            for (var i = 0; i <= (output.length - 1); i++) {
                $(“ul”).append(“<li>“+ output[i] +“</li>“);
            }
        }




        // bussiness logic
        //array to store the numbers
        var numbers = [];
        //getting the numbers in the range of 1- user’s input
        function rangeFinder() {
            for (var i = 1; i <= input; i++) {
                numbers.push(i);
            }
        };
        rangeFinder();
        console.log(numbers);
        //test divisibility by 3
        var output = [];
        function divisibility3() {
            for (var i = 1; i <= numbers.length; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    output.push(“pingpong”)
                }
                //testing the divisiblity of 3
                else if (i % 3 === 0) {
                    output.push(“ping”);
                }
                else if (i % 5 === 0) {
                    output.push(“pong”)
                }
                else {
                    output.push(i);
                }
            };
        }
        divisibility3();
        console.log(output);
        finalOutput();



        event.preventDefault();
    });
});