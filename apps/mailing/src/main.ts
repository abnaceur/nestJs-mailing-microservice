import { NestFactory } from '@nestjs/core';
import { MailingModule } from './mailing.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(MailingModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('MALING'));
  await app.startAllMicroservices();
}
bootstrap();

