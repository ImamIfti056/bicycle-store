import { UpdateQuery } from 'mongoose';
import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductInDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (q: any) => {
  const result = await ProductModel.find(q);
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const findAndUpdateProductFromDB = async (
  _id: string,
  updates: UpdateQuery<Product>,
  options: { new: boolean; runValidators: boolean },
) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: _id },
    updates,
    options,
  );
  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.updateOne({ _id }, { isDeleted: true });
  return result;
};

export const ProductServices = {
  createProductInDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  findAndUpdateProductFromDB,
  deleteProductFromDB,
};
