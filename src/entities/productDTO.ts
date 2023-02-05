import Product from "./Iproduct";
export default interface IproductDTO{
    amount:number;
    products?:Array<Product>;
}