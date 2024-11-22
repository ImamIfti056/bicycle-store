import { Schema, model, connect } from 'mongoose';

export type Order = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};
