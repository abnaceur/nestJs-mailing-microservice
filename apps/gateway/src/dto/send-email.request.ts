import {
  IsNotEmpty,
  IsEmail,
  IsString,
} from 'class-validator';

export class SendEmailRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsString()
  @IsNotEmpty()
  subject: string;
  
  @IsString()
  @IsNotEmpty()
  body: string;
}
