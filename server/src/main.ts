import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filters';
import { setupSwagger } from './commons/utils';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.SERVER_PORT;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  setupSwagger(app);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(PORT);

  if (process.env.NODE_ENV === 'development') {
    Logger.log(`Application running on port ${PORT}, http://localhost:${PORT}`);
    Logger.log(`Go to API Docs : http://localhost:${PORT}/swagger`);
  }
}
bootstrap();
