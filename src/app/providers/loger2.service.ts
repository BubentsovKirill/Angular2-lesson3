import { Injectable } from '@angular/core';

@Injectable()
export class Loger2Service {
  messages: string[] = [];
  log(message:string){
    this.messages.push(message);
    console.log('Loger2 - ' + message)
  }
}
