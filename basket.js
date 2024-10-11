alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
let Basket = (basket,prices)=>{
                let totalCost = 0;
                for(let item in basket){
                    if(prices[item] != undefined){
                        totalCost += basket[item] * prices[item];
                    }
                }
                return totalCost;
            }
            basket = {apple:1,orange:1,grapes:5};
            price = {apple:0.05,orange:1.5,grapes:2.0,tea:5,milk:10};
            alert(Basket(basket,price));