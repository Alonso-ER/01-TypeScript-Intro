export interface Product{
    desc: string;
    price: number;
}
//? const phone: Product = {
//?     desc: 'Nokia A1',
//?     price: 15.00,
//? }

//? const tablet: Product =  {
//?     desc: "iPad Air",
//?     price: 250.00
//? }

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number]{
    const { tax, products } = options

    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return[total, total* tax];

}

//* const shoppingCart = [phone, tablet];
//* const tax = 0.15;

// const [total, totalTax] = taxCalculation({
//     products: shoppingCart,
//     tax,
// })


// console.log(`Total: ${total}`)
// console.log(`Tax: ${totalTax}`)




export{};