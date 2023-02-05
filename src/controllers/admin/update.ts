import { Request,Response } from "express";
import Product from "../../entities/Iproduct";
import updateProduct from "../../models/updateByName";

export default async function update(req: Request<{name:string},{},Product>, res: Response){
try {
    
    const resultado = await updateProduct(

        req.params.name,
        
        {
        
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        
        })

        res.send(resultado)

} catch (error) {

    res.status(500).send(error)

}




}