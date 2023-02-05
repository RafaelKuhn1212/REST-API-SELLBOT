import express from 'express';
import controllers from '../controllers/admin/index';
import validateProduct from '../middleware/validateProduct';

const router = express.Router();

router.get('/insert', validateProduct, controllers.insert);
router.get('/update/:name', validateProduct, controllers.update);
export default router;
