import { Router } from 'express';
import { orderControllers } from './order.controller';

const router = Router();

router.post('/', orderControllers.createOrder);

// router.get('/revenue', calculateRevenue)

export default router;
