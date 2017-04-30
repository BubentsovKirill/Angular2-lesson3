import { Component } from '@angular/core';
import { LogerService,Loger3Service } from '../index';

@Component({
  selector: 'fa-factory-provider',
  templateUrl: './factory-provider.component.html',
  styleUrls: ['./factory-provider.component.css'],
  providers:[{
    provide: LogerService,
    useFactory: () => {
      return new Loger3Service('test')
    }
  }]
})
export class FactoryProviderComponent{

  private message: string;
  constructor(private logger: LogerService) {}

  logMessage(){
    this.logger.log(this.message)
  }

}
