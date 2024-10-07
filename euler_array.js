function calculateSum() {
    
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let list = document.getElementById('list').value.split(',').map(Number); // Convert the list to an array of numbers

    // Initialize the sum
    let totalSum = 0;

    
    for (let i = 0; i < list.length; i++) {
        if (list[i] % a === 0 || list[i] % b === 0) {
            totalSum += list[i];
        }
    }

    // Display the result
    document.getElementById('result').innerHTML = `The sum of multiples of ${a} or ${b} in the list is: ${totalSum}`;
}