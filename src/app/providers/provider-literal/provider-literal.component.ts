import { Component } from '@angular/core';
import {LogerService, Loger2Service} from '../index';

@Component({
  selector: 'fa-provider-literal',
  templateUrl: './provider-literal.component.html',
  styleUrls: ['./provider-literal.component.css'],
  providers: [{provide: LogerService, useClass: Loger2Service}]
})
export class ProviderLiteralComponent  {

  private message: string;
  constructor(private logger: LogerService) {}

  logMessage(){
    this.logger.log(this.message)
  }

}
