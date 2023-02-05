import Product from "../entities/Iproduct"
import connectToDatabase from "./connect"

export default async function update(name: string,newProduct:Product): Promise<string> {
    try {

        const db = await connectToDatabase('products')
        if(db instanceof Error) return 'Error connecting to database'
        const products = db.collection<Product>('products')

        const result = await products.updateOne({name: name}, {$set: newProduct})
        console.log(result.modifiedCount)
        if (result.modifiedCount == 0) return 'Product not found'
        return 'Product updated'
    } catch (error) {
        return 'Error updating product'
    }


}