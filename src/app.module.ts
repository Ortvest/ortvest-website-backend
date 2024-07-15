import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersService } from 'src/orders/orders.service';
import { OrdersController } from 'src/orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
