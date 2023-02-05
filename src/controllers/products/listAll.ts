import { Request, Response } from 'express';
import getAllProduct from '../../models/getAllProducts';

export default async function listAll(req: Request, res: Response) {
    getAllProduct().then((response) => {
        return res.send(response)
    }).catch((err) => {
        return res.status(500).send(err.message)
    })


}