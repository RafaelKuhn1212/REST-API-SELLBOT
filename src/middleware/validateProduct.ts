import * as yup from 'yup';
import Product from '../entities/Iproduct';
import { Request, Response, NextFunction } from 'express';

const schema: yup.SchemaOf<Product> = yup.object().shape({
    price: yup.number().required('Price is required'),
    name: yup.string().required('Name is required'),
    stock: yup.number().required('Stock is required'),
    description: yup.string()
});

export default function validateProduct(req:Request, res:Response, next:NextFunction) {

schema.isValid(req.body).then((valid) => {
if(valid){
return next()
}
return res.status(400).json({ errror: 'Invalid data, Data must be: price:number, name:string, stock:number, description?:string'})

}).catch((err) => {
return res.status(400).json({ error: err.message })
})

};