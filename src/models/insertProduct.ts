import Product from "../entities/Iproduct";
import connectToDatabase from "./connect";

export default async function insertProduct(product:Product):Promise<string | Error>{

return new Promise(async (resolve, reject) => {
try {

const db = await connectToDatabase('products')
if(db instanceof Error) return db
const products = db.collection<Product>('products')
const result = await products.insertOne(product)
return resolve('Product inserted')

} catch (error) {
return reject(new Error('Error inserting product'))
}

})

}