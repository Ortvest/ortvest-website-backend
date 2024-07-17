import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const options = {
  origin: 'https://ortvest-admin.vercel.app', // Removed trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Authorization',
    'Content-Type',
    'Allow-Control-Allow-Origin',
  ],
  credentials: true,
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(options);
  await app.listen(8080);
}
bootstrap();
