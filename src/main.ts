import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    // origin: '*', // No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'Access-Control-Allow-Origin',
      'Mode',
      'Access-Control-Allow-Credentials',
      'allow-control-allow-origin',
    ],
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
