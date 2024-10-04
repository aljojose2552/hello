alert("loaded euler JS");

function calculateSum() {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
    return sum;
    
}


function GetValues(event) {
    event.preventDefault(); 

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let n = parseInt(document.getElementById('n').value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Please enter valid numbers.");
        return;
    }

 /*   let sum = calculateSum();
    alert(`The sum of multiples of ${a} or ${b} below ${n} is: ${sum}`);
*/
    
    document.getElementById('a').style.display = "none";
    document.getElementById('b').style.display = "none";
    document.getElementById('n').style.display = "none";
}

function Show() {

    document.getElementById('a').style.display = "block";
    document.getElementById('b').style.display = "block";
    document.getElementById('n').style.display = "block";
}
