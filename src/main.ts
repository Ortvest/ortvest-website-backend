import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    const corsWhitelist = [
      'https://ortvest-admin.vercel.app/',
      'http://localhost:5174/',
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
