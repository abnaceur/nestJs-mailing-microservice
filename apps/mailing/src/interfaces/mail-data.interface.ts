export interface MailData<T = never> {
  to: string;
  from: string;
  subject: string;
  body: string;
}
