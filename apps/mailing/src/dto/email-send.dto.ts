import { IsNotEmpty, IsEmail, Validate } from 'class-validator';

export class EmailSendDto {
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  subject: string;
}
