

function rate_value() {
    var rate_val = document.getElementById("rate_val");
    var rate = document.getElementById("rate").value;
    rate_val.innerHTML = rate;
} 
// function updateTextInput(val) {
//           document.getElementById('textInput').value=val; 
//         }
        
// window.onload = function () {
        //Reference the DropDownList.
        // years = document.getElementById("years");
 
        //Determine the Current Year.
        // var currentYear = (new Date()).getFullYear();
 
        //Loop and add the Year values to DropDownList.
    //     for (var i = 1; i <= 10; i++) {
    //         var option = document.createElement("OPTION");
    //         option.innerHTML = i;
    //         option.value = i;
    //         years.appendChild(option);
    //     }
    // };
function compute() {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var result = document.getElementById("result");

    var yield = principal * rate * years / 100;
    // result.innerHTML = "If you deposit" + principal + "at an interest rate of" + rate + "%." + "You will receive an amount of" + yield;
    result.innerHTML = yield;
}

    // if (principal <= 0) {
    //     result.innerHTML = "please put positive value";
    // }
    // else if (!principal || !rate) {
    //     result.innerHTML = "please put value";
    // } 
    // else {
    //     var yield = principal * rate * years / 100;
    //     result.innerHTML = yield;
    // }
// }



    

