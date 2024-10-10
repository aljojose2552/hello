alert("loaded euler JS");
/*let a=3;
let b=5;
let n=1000; */

function calculate()
 {
    let sum = 0;

    for (let i = 1; i < n; i++) 
        {
        if (i % a === 0 || i % b === 0) 
            {
            sum = sum + i;
        }
    }

  //alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}
function GetValues() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
alert(a);
   

    // Hide the input fields and button after submission
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("n").style.display = "none";
    
    let sum = calculate();
  
    
}
function Show() {
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("n").style.display = "block";
}
