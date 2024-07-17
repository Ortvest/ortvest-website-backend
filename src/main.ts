import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['https://ortvest-admin.vercel.app', 'https://www.ortvest.com/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // allowedHeaders: [
    //   'Authorization',
    //   'Content-Type',
    //   'Access-Control-Allow-Origin',
    //   'Mode',
    //   'Access-Control-Allow-Credentials',
    //   'allow-control-allow-origin',
    // ],
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
