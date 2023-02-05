import express from 'express';

import * as productsControllers from '../controllers/products/index';

const router = express.Router();

router.get('/listAll',productsControllers.listAll) // /products/listAll
router.get('/getByName/:name',productsControllers.getByName) ;; // /products/getByName/:name

export default router;
