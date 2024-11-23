import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    //will call service fn to send this data
    const result = await ProductServices.createProductInDB(productData);

    //send res
    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB(req.query);

    res.status(200).json({
      success: true,
      message: 'Products are retrieved',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle is retrieved',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'product not found',
      data: err,
    });
  }
};

const findAndUpdateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const result = await ProductServices.findAndUpdateProductFromDB(
      productId,
      updates,
      { new: true, runValidators: true },
    );

    if (!result) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bicycle is retrieved',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Product not found or something went wrong',
      data: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Bicycle deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  findAndUpdateProduct,
  deleteProduct,
};
