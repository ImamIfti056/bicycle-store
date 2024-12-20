import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

//will call controller fn
router.post('/create-product', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

// router.put('/:productId', ProductControllers.findAndUpdateProduct);

router.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = router;
