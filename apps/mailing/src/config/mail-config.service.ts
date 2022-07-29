import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Injectable()
export class MailConfigService implements MailerOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMailerOptions(): MailerOptions {
    return {
      transport: {
        host: this.configService.get('mail.host'),
        port: this.configService.get('mail.port'),
        ignoreTLS: false,
      },
      template: {
        dir: path.join(process.env.PWD, 'apps/mailing/src/mail-templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          partials: {
            dir: path.join(process.env.PWD, 'apps/mailing/src/mail-templates'),
            options: {
              strict: true,
            },
          },
        },
      },
    } as MailerOptions;
  }
}
