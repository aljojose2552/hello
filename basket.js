alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/
let Basket = (basket,prices)=>{
                let total = 0;
                for(let item in basket){
                    if(prices[item] != undefined){
                        total += basket[item] * prices[item];
                    }
                }
                return total;
            }
            basket = {milk:1,Beaf:1,bread:1};
            price = {apple:1.99,orange:1.05,grapes:1.80,bread:1.09,milk:2.09,Beaf:4.88};
            alert(`total amount of product is` Basket(basket,price));