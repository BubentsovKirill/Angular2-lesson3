import { Component } from '@angular/core';
import { CounterService } from '../index';

@Component({
  selector: 'fa-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component  {

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
