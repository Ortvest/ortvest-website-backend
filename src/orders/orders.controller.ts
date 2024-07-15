import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '../shared/interfaces/orders.interfaces';
import { CreateOrderDto } from '../shared/dto/order.dtos';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(AuthGuard)
  @Get('/all')
  async getAllOrders(): Promise<Order[]> {
    return await this.ordersService.getAllOrders();
  }

  @UseGuards(AuthGuard)
  @Post('/new')
  async addNewOrder(@Body() order: CreateOrderDto): Promise<boolean> {
    return await this.ordersService.addNewOrder(order);
  }
}
