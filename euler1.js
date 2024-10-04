alert("loaded euler JS");

// Function to calculate the sum of multiples of a or b below n
function calculate(a, b, n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    return sum;
}

// Function to retrieve input values, calculate sum and manipulate DOM
function GetValues() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Hide the input fields and button after submission
    document.getElementById("a").style.display = "none";
    document.getElementById("b").style.display = "none";
    document.getElementById("n").style.display = "none";

    let sum = calculate(a, b, n);

    // Display the result
    document.getElementById("result").innerHTML = "The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum;

    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}

// Function to show inputs again if needed
function Show() {
    document.getElementById("a").style.display = "block";
    document.getElementById("b").style.display = "block";
    document.getElementById("n").style.display = "block";
}