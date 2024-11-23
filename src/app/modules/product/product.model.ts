import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

//schema for every product
const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Qunatity must be a positive number'],
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true },
);

//updating stock based on quantity
productSchema.pre('save', function (next) {
  if (this.quantity === 0) {
    this.inStock = false;
  } else {
    this.inStock = true;
  }
  next();
});

// productSchema.pre('findOneAndUpdate', function (next) {
//   const updates = this.getUpdate();
//   if (updates && typeof updates.quantity === 'number') {
//     updates.inStock = updates.quantity > 0;
//     this.setUpdate(updates); // Update the document before saving
//   }
//   next();
// });

//model
export const ProductModel = model<Product>('Product', productSchema);
