let l = [1,2,3,4,5,6,7,8,9,10];
let a = [3,5];

function sum(a,l)
{
    return l.reduce((sum,num) =>
    {
        if (num % a[0] == 0 || num % a[1] == 0)
        {
            return sum + num;
        }
        return sum;
    }, 0);
}
let result = sum(a,l);
alert(`sum of multiple of numbers ${a[0]} or ${a[1]} is : ${result}`);