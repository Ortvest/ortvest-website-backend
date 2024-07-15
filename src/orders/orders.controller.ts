import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/shared/interfaces/orders.interfaces';
import { CreateOrderDto } from 'src/shared/dto/order.dtos';
import { AuthGuard } from 'src/auth/auth.guard';

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
