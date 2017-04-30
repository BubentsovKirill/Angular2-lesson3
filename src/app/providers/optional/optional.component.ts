import { Component,Optional} from '@angular/core';
import { LogerService } from '../index';
@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css'],
  providers: [LogerService]
})
export class OptionalComponent  {
  constructor(@Optional() private logger:LogerService) {}
  log(){
    if(this.logger){
      this.logger.log('Optional 1')
    }
    else{
      console.log('Optional 2');
    }
  }
}
