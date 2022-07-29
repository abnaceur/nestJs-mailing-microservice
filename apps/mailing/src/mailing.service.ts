import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailingService {
  constructor(
    private mailerService: MailerService,
  ) {}

  private readonly logger = new Logger(MailingService.name);

  async sendEmail(mailData: any) {
    this.logger.log('Mailing...', mailData);
    await this.mailerService.sendMail({
      to: mailData.to,
      subject: mailData.subject,
      text: mailData.body,
      from: mailData.from,
      template: './send-email',
      context: {
        subject: mailData.subject,
        title: "Liquidity Group - Technical test",
        text: mailData.body,
      },
    });
  }
}

