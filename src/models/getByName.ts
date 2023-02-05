import Product from "../entities/Iproduct";
import IproductDTO from "../entities/productDTO";
import connectToDatabase from "./connect";

export default async function getByName(name:string):Promise<IproductDTO | Error>{

return new Promise(async (resolve, reject)=>{
try {
    
const db = await connectToDatabase('products')
if(db instanceof Error) return reject(db)

const products = db.collection<Product>('products')
const resultado = products.find({name:name})
const resultados = await resultado.toArray()
return resolve({
    amount: resultados.length,
    products: resultados
})

} catch (error) {
reject(error)    
}


})


}