import { Injectable } from '@nestjs/common';

@Injectable()
private trips =[
  {id: 1, name: 'to china', price:9000},
  {id:2, name: 'to morocco', price:4000},
]
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
