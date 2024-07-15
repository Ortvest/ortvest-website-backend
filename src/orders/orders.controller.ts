import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from 'src/shared/interfaces/Orders.interfaces';
import { CreateOrderDto } from 'src/shared/dto/Order.dto';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/all')
  getAllOrders(): Order[] {
    return this.ordersService.getAllOrders();
  }

  @Post('/new')
  addNewOrder(@Body() order: CreateOrderDto): boolean {
    return this.ordersService.addNewOrder(order);
  }
}
