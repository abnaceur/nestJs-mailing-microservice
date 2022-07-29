import { Injectable, Inject } from '@nestjs/common';
import { SendEmailRequest } from './dto/send-email.request';
import { MAILING_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class GatewayService {
  constructor(@Inject(MAILING_SERVICE) private mailingClient: ClientProxy) {}
  
  async sendEmail(request: SendEmailRequest) {
    try {
        this.mailingClient.emit('mailing_created', request)
    } catch (err) {
      throw err;
    }
  }
}
