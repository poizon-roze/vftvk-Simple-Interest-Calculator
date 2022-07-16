function clean() {
document.getElementById("rate_val").innerHTML = "10.25"
document.getElementById("principal").focus()
document.getElementById("result").innerHTML = ""
}

function rate_value() {
    let rate_val = document.getElementById("rate_val");
    let rate = document.getElementById("rate").value;
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
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let result = document.getElementById("result");
    let rate = document.getElementById("rate").value;

    var year = new Date().getFullYear()+parseInt(years);

    if (principal < 0 || isNaN(principal) || !principal) {
        alert("please put positive value")
    }
    
    else {
        var yield = principal * rate * years / 100;
        result.innerHTML = "If you deposit " + principal + ", an interest rate of " + rate + "%." + "You will receive an amount of " + yield + ". In the year " + year
    }
}



    

