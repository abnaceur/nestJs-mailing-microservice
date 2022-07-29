import {
  IsNotEmpty,
  isEmail,
  IsString,
} from 'class-validator';

export class SendEmailRequest {
  @IsString()
  @IsNotEmpty()
  // @isEmail()
  to: string;

  @IsString()
  @IsNotEmpty()
  from: string;

  @IsString()
  @IsNotEmpty()
  subject: string;
  
  @IsString()
  @IsNotEmpty()
  body: string;
}
