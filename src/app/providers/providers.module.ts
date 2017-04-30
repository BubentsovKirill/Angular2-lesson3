import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ProviderLiteralComponent,
    AliesedComponent,
    ValueProviderComponent,
    FactoryProviderComponent,
    OpaqueTokenComponent,
    OptionalComponent
} from './index';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
      ProviderLiteralComponent,
      AliesedComponent,
      ValueProviderComponent,
      FactoryProviderComponent,
      OpaqueTokenComponent,
      OptionalComponent,
  ]
})
export class ProvidersModule { }
