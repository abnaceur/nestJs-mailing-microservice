import { IsNotEmpty, Validate } from 'class-validator';

export class EmailSendDto {
  @IsNotEmpty()
  to: string;

  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  subject: string;
}
