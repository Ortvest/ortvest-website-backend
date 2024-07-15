import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/shared/interfaces/Orders.interfaces';
import { CreateOrderDto } from 'src/shared/dto/Order.dto';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/all')
  async getAllOrders(): Promise<Order[]> {
    return await this.ordersService.getAllOrders();
  }

  @Post('/new')
  async addNewOrder(@Body() order: CreateOrderDto): Promise<boolean> {
    return await this.ordersService.addNewOrder(order);
  }
}
