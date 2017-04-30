import { Component } from '@angular/core';
import { LogerService, Loger2Service } from '../index';

@Component({
  selector: 'fa-aliesed',
  templateUrl: './aliesed.component.html',
  styleUrls: ['./aliesed.component.css'],
  providers :[Loger2Service, {provide : LogerService, useExisting: Loger2Service}]
})
export class AliesedComponent {

  private message: string;
  constructor(private logger: LogerService) {}

  logMessage(){
    this.logger.log(this.message)
  }

}
