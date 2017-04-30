import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    CounterService,
    CounterHostComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component
} from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CounterHostComponent,
      Counter1Component,
      Counter2Component,
      Counter3Component
  ],
  providers : [CounterService]

})
export class ServiceModule { }
