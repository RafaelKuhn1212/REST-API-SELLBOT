import IproductDTO from "../entities/productDTO";
import connectToDatabase from "./connect";
import Product from "../entities/Iproduct";

export default function getAllProduct(): Promise<IproductDTO | Error> {

    return new Promise(async (resolve, reject) => {
        try {

            const db = await connectToDatabase('products')

            if (db instanceof Error) return reject(db)

            const products = db.collection<Product>('products');
            const productsList = products.find({})

            if (await products.countDocuments() == 0) {

                return resolve({
                    amount: 0,
                })

            }
            return resolve({
                amount: await products.countDocuments(),
                products: await productsList.toArray()
            })

        } catch (error) {
            reject(error)
        }

    })


}