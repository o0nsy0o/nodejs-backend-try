import { NestFactory } from '@nestjs/core';
import { RolesModule } from './module/roles/roles.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(RolesModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
