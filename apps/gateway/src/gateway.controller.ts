import { Controller, Get, Req, Post, Body} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { SendEmailRequest } from './dto/send-email.request';

@Controller('mail')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('send')
  async sendEmail(@Body() request: SendEmailRequest) {
    return this.gatewayService.sendEmail(request);
  }

}
