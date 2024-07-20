import { Order } from './../shared/interfaces/orders.interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from '../shared/dto/order.dtos';
import { Order as OrderSchema } from '../shared/schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(OrderSchema.name) private orderModel: Model<OrderSchema>,
  ) {}
  async getAllOrders(): Promise<Order[]> {
    const orders = (await this.orderModel.find().lean()) as Order[];
    return orders;
  }

  async addNewOrder(order: CreateOrderDto): Promise<boolean> {
    const createdOrder = await this.orderModel.create({
      ...order,
      status: 'Pending',
    });
    return Boolean(createdOrder);
  }

  async deleteOrder(orderId: string): Promise<boolean> {
    const createdOrder = await this.orderModel.findByIdAndDelete({
      _id: orderId,
    });
    return Boolean(createdOrder);
  }

  async updateOrder(order: Order): Promise<boolean> {
    const createdOrder = await this.orderModel.findByIdAndUpdate(
      order._id,
      order,
      { new: true },
    );
    return Boolean(createdOrder);
  }
}
