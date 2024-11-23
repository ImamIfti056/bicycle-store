import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderInDB = async (order: Order) => {
  const result = await OrderModel.create(order);

  return result;
};

export const orderServices = {
  createOrderInDB,
};
