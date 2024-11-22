import { Schema, model, connect } from 'mongoose';

// 1. interface for representing a bicycle in MongoDB.
export type Product = {
  name: string;
  brand: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
};
