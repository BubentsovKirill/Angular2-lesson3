import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleServiceModule } from './simpleService/simple-service.module';
import { ServiceModule } from './serviceHierarchy/service.module';
import { ProvidersModule } from './providers/providers.module';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SimpleServiceModule,
    ServiceModule,
    ProvidersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
