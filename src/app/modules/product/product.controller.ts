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
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
    try{
        const result = await ProductServices.getAllProductsFromDB()

        res.status(200).json({
            success: true,
            message: 'Products are retrieved',
            data: result,
        });
    }catch(err){
        console.log(err)
    }
}

const getSingleProduct = async (req: Request, res: Response) => {
    try{
        const productId = req.params.productId;
        const result = await ProductServices.getSingleProductFromDB(productId)

        res.status(200).json({
            success: true,
            message: 'Product is retrieved',
            data: result,
        });
    }catch(err){
        console.log(err)
    }
}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
