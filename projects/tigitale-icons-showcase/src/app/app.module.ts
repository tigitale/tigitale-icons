import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TigitaleIconsModule } from 'tigitale-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TigitaleIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
