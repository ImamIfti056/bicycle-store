import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try{
        const product = req.body;

    //will call service fn to send this data
    const result = await ProductServices.createProductInDB

    //send res
    res.status(200).json({
        success: true,
        message: 'Product is created successfully',
        data: result
    })
    }catch(err){
        console.log(err)
    }

}

export const ProductControllers = {
    createProduct,   
}