import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NglModule } from 'ng-lightning/ng-lightning';


import { ConverterModule } from './converter/converter.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ConverterModule,
    NglModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
