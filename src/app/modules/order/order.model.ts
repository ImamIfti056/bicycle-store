import { Schema, model, connect } from 'mongoose';
import { Order } from './order.interface';

//schema for orders
const orderSchema = new Schema<Order>({
  email: { type: String, require: true },
  product: { type: String, require: true },
  quantity: { type: Number, require: true },
  totalPrice: { type: Number, require: true },
});

export const OrderModel = model<Order>('Order', orderSchema);
