import { Request, Response } from 'express';
import getByName from '../../models/getByName';

export default async function getById(req:Request, res:Response){
    const id = req.params.name

    getByName(id).then((response) => {
        return res.send(response)
    }).catch((err) => {
        return res.status(500).send(err.message)
    })
    
}