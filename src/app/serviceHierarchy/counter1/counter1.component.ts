import { Component } from '@angular/core';
import { CounterService } from '../index';

@Component({
  selector: 'fa-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers : [CounterService]
})

export class Counter1Component {

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
