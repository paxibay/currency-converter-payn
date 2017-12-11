import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NglModule } from 'ng-lightning/ng-lightning';

import { ConverterComponent } from './components/converter.component';
import { ConverterCurrencyComponent } from './components/converter-currency.component';

export const IMPORTS_MODULES = [
  BrowserModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  NglModule
];

const COMPONENTS = [
  ConverterComponent,
  ConverterCurrencyComponent
];

@NgModule({
  imports: [...IMPORTS_MODULES],
  declarations: [...COMPONENTS],
  exports: [ConverterComponent],
  providers: []
})
export class ConverterModule {}
