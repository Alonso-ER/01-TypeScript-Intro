import { Product, taxCalculation } from './06-function-destructuring';



const shoppingCart: Product[] = [
    {
        desc: 'Nokia',
        price: 100.00
    },
    {
        desc: 'iPad',
        price: 150.00
    }
];

//!Tax = 0.15
const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax)




