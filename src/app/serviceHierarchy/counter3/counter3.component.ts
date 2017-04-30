import { Component} from '@angular/core';
import { CounterService } from '../index';

@Component({
  selector: 'fa-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css']
})
export class Counter3Component {


  private counter: number = 0;
  constructor(private counterService: CounterService) { }

  minusOne(){
    this.counterService.decrement();
    this.counter = this.counterService.getValue();
  }
  plusOne(){
    this.counterService.increment();
    this.counter = this.counterService.getValue();
  }

}
