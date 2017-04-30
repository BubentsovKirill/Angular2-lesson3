import { Injectable } from '@angular/core';

@Injectable()
export class Loger3Service {

  constructor(private prefix:string) {}

  log(message:string){
    console.log(this.prefix + "_" + message )
  }

}
