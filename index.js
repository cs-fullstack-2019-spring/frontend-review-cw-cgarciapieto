var clickButton = document.getElementById("clickme");
// 2 variable that create an empty array, and count starts count at zero
var array = [];
var count = 0;

// creates an on click event
clickButton.onclick = quitFunction;

//function that runs when on clicl event happens
function quitFunction() {

    while(true) {
        var user = prompt("Do You want to quit?");

        if (user != "n") {

            array.push(user);
            count+=1

        } else if (user == "n") {
            alert(count)
        }
    }

}