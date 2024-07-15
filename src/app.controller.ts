import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get('hc')
  healthCheck(): HttpException {
    return new HttpException('OK', HttpStatus.OK);
  }
}
