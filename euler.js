alert("loaded euler JS");
let a=3;
let b=5;
let n=1000;

function sumofmultiple(a,b,n)
{

let sum = 0;   
           
            for (let i = 0; i < 1000; i++)
             {
                if (i%3 == 0 || i%5 == 0) 
                {
                    sum += i;
                }
                alert("the sum is" +sum)
            }
}
function calculate()
{
    const a = document.getElementById('a').value 
    const n = document.getElementById('n').value 
    const b = document.getElementById('b').value 

    let result = sumofmultiple(a,b,n)

    alert("the answer" +result)
}