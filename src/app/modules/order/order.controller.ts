import { NextFunction, Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    //will call service fn to send this data
    const result = await orderServices.createOrderInDB(orderData);

    //send res
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
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

export const orderControllers = {
  createOrder,
};
