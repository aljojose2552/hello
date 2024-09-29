alert("loaded euler JS");
/*let a=3;
let b=5;
let n=1000; */

function calculate()
 {
    // Get user inputs
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let sum = 0;

    // Loop through numbers below n
    for (let i = 1; i < n; i++) 
        {
        if (i % a === 0 || i % b === 0) 
            {
            sum = sum + i;
        }
    }

    // Show the result
    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}