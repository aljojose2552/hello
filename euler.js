alert("loaded euler JS");
let a=3;
let b=5;
let n=1000;

let sum = 0;

        {
           
            for (let i = 0; i < 1000; i++)
             {
                if (a%3 == 0 || b%5 == 0) 
                {
                    sum += i;
                }
            }
        }
alert("sum of all multiple" + sum);