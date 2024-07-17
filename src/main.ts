import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const options = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
  credentials: true,
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(options);
  await app.listen(8080);
}
bootstrap();
