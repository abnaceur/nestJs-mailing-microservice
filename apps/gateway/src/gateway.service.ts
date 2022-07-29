import { Injectable, Inject } from '@nestjs/common';
import { SendEmailRequest } from './dto/send-email.request';
import { MAILING_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(@Inject(MAILING_SERVICE) private mailingClient: ClientProxy) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(request: SendEmailRequest) {
    try {
      await lastValueFrom(
        this.mailingClient.emit('mailing_created', request),
      );
    } catch (err) {
      throw err;
    }
  }
  
}
