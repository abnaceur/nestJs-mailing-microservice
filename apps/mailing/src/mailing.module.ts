import { Module } from '@nestjs/common';
import { MailingController } from './mailing.controller';
import { MailingService } from './mailing.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common';
import appConfig from './config/app.config';
import mailConfig from './config/mail.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConfigService } from './config/mail-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        mailConfig,
      ],
      envFilePath: ['.env'],
    }),
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),
    RmqModule
  ],
  controllers: [MailingController],
  providers: [MailingService],
})
export class MailingModule {}
