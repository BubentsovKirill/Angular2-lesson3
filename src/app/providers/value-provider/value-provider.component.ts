import { Component, OnInit } from '@angular/core';
import { LogerService } from '../index';

let sipleLogger = {
  log: (m) => {
    console.log('Simple Loger - ' + m)
  }
}
@Component({
  selector: 'fa-value-provider',
  templateUrl: './value-provider.component.html',
  styleUrls: ['./value-provider.component.css'],
  providers: [{provide: LogerService, useValue : sipleLogger}]
})
export class ValueProviderComponent {


  private message: string;
  constructor(private logger: LogerService) {}

  logMessage(){
    this.logger.log(this.message)
  }
}
