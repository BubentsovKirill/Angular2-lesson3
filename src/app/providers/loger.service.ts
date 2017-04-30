import { Injectable } from '@angular/core';

@Injectable()
export class LogerService {
  messages: string[] = [];
  log(message:string){
    this.messages.push(message);
    console.log('Loger - ' + message)
  }
}
