let l = [1,2,3,4,5,6,7,8,9,10];
let a = 3;
let b = 5;

function sum(a,b,l)
{
    return l.reduce((sum,num) =>
    {
        if (num % a == 0 || num % b == 0)
        {
            return sum + num;
        }
        return sum;
    }, 0);
}
let result = sum(a,b,l);
alert(`sum of multiple of numbers ${a} or ${b} is : ${result}`);