alert("loaded euler JS");

function calculateSum(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}


function GetValues(event) {
    event.preventDefault(); 

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);

  
    let sum = calculateSum(a, b, n);
    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);


    // Hide inputs after calculation
    document.getElementById('a').style.display = "none";
    document.getElementById('b').style.display = "none";
    document.getElementById('n').style.display = "none";
}

function Show() {
    document.getElementById('a').style.display = "block";
    document.getElementById('b').style.display = "block";
    document.getElementById('n').style.display = "block";
}
