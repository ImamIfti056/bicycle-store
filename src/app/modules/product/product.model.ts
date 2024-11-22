import { Schema, model, connect } from 'mongoose';
import { Product } from './product.interface';

//schema for every product
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  type: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

//model
export const ProductModel = model<Product>('Product', productSchema);
