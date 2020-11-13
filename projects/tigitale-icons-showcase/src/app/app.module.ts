import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TigitaleIconsModule } from 'tigitale-icons';
import { TigitaleIconsRegistry } from 'projects/tigitale-icons/src/lib/tigitale-icons.registry';
import { tigitaleIconsAdvertisement, tigitaleIconsAirplay, tigitaleIconsAlarm } from 'projects/tigitale-icons/src/lib/tigitale-icons';

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
export class AppModule {
  constructor(private tigitaleIconRegistry: TigitaleIconsRegistry) {
    this.tigitaleIconRegistry.resgisterIcons([
      tigitaleIconsAdvertisement,
      tigitaleIconsAirplay,
      tigitaleIconsAlarm,
    ])
  }
}
