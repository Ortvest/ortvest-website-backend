import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['https://ortvest-admin.vercel.app', 'https://www.ortvest.com/'],
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

  app.use((req, res, next) => {
    const corsWhitelist = [
      'https://ortvest-admin.vercel.app',
      'https://www.ortvest.com/',
    ];
    if (corsWhitelist.includes(req.headers.origin)) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );
      res.header('Access-Control-Allow-Methods', [
        'PUT',
        'DELETE',
        'POST',
        'GET',
      ]);
    }
    next();
  });
  await app.listen(8080);
}
bootstrap();
