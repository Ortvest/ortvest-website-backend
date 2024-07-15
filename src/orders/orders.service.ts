import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/shared/dto/Order.dto';
import { Order } from 'src/shared/interfaces/Orders.interfaces';

@Injectable()
export class OrdersService {
  getAllOrders(): Order[] {
    return [];
  }

  addNewOrder(order: CreateOrderDto): boolean {
    return true;
  }
}
