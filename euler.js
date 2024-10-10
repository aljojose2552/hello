alert("loaded euler JS");
/*let a=3;
let b=5;
let n=1000; */

function calculate()
 {
    sum = 0;

    for (let i = 1; i < n; i++) 
        {
        if (i % a === 0 || i % b === 0) 
            {
            sum = sum + i;
        }
    }
    return sum;
}
function GetValues() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
//alert(a);
   
    let sum = calculate();
    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
    HideValues();
}
function HideValues(){

 // Hide the input fields and button after submission
 document.getElementById("a").style.display = "none";
 document.getElementById("b").style.display = "none";
 document.getElementById("n").style.display = "none";

}
function Show() {
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("n").style.display = "block";
}
