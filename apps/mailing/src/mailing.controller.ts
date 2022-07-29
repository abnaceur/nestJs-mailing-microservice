import { Controller, Get } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { RmqService } from '@app/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';


@Controller()
export class MailingController {
  constructor(private readonly mailingService: MailingService,
    private readonly rmqService: RmqService
    ) {}
    
  @EventPattern('mailing_created')
  async handleMeailSend(@Payload() data: any, @Ctx() context: RmqContext) {
    this.mailingService.sendEmail(data);
    this.rmqService.ack(context);
  } 
}
