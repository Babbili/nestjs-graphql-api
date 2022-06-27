import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const PORT = configService.get('PORT')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // will validate Requests to match types defined
    })
  )
  await app.listen(PORT | 3000);
}
bootstrap();
