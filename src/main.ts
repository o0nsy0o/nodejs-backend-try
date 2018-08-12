import { NestFactory } from '@nestjs/core';
import { RolesModule } from './module/roles/roles.module';

async function bootstrap() {
  const app = await NestFactory.create(RolesModule);
  await app.listen(3000);
}

bootstrap();
