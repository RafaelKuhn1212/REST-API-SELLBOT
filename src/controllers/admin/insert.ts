import { Request, Response } from 'express'
import getByName from '../../models/getByName'
import insertProduct from '../../models/insertProduct'

export default async function insert(req: Request, res: Response) {

    const response = await getByName(req.body.name)

    if (response instanceof Error) return res.status(500).send(response.message)
    if (response.amount > 0) return res.status(400).send('Product already exists')

    insertProduct(req.body).then((response) => {
        return res.send(response)
    }).catch((err) => {
        return res.status(500).send(err.message)
    })



}