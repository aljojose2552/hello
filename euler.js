alert("loaded euler JS");
a=3;
b=5;
n=1000;

<script>
function calculateSum() 
        {
            let sum = 0;
            for (let i = 0; i < 1000; i++)
             {
                if (i % 3 == 0 || i % 5 == 0) 
                {
                    sum += i;
                }
            }
        }
</script>