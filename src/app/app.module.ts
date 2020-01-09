import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PickListModule} from 'primeng/picklist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PickListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
