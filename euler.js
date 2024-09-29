alert("loaded euler JS");
let a=3;
let b=5;
let n=1000;

function sumofmultiple(a,b,n)
{

let sum = 0;   
           
            for (let i = 0; i < n; i++)
             {
                if (i%3 == 0 || i%5 == 0) 
                {
                    sum += i;
                }
                return sum;
            }
}
function calculate()
{
    const a = parseInt(document.getElementById('a').value);
    const n = parseInt(document.getElementById('n').value); 
    const b = parseInt(document.getElementById('b').value);

    const result = sumofmultiple(a,b,n)

    alert("The sum of multiples of " + a + " or " + b + " below " + n + " is: " + result);
 
}