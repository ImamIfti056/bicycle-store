import express from 'express'
import { ProductControllers } from './product.controller'

const router = express.Router()

//will call controller fn
router.post('/create-product', ProductControllers.createProduct)

export const ProductRoutes = router;