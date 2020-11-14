import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  tigitaleIcons360,
  tigitaleIconsAdvertisement,
  tigitaleIconsAirplay,
  tigitaleIconsAlarm,
  tigitaleIconsAlarmChecked,
  tigitaleIconsAlarmMinus,
  tigitaleIconsAlarmNo,
  tigitaleIconsAlarmPlus,
  tigitaleIconsAlarmSnooze,
  tigitaleIconsAlertCircle,
  tigitaleIconsAlertOctagon,
  tigitaleIconsAlertTriangle,
  tigitaleIconsAppNotification,
  tigitaleIconsArrowBottom,
  TigitaleIconsArrowBottomLeft,
  TigitaleIconsArrowBottomRight,
  TigitaleIconsArrowForward,
  TigitaleIconsArrowForwardAll,
  TigitaleIconsArrowLeft,
  TigitaleIconsArrowLeftCurved,
  TigitaleIconsArrowRedo,
  TigitaleIconsArrowReply,
  TigitaleIconsArrowReplyAll,
  TigitaleIconsArrowRight,
  TigitaleIconAlarmMinusRightCurved,
  TigitaleIconsArrowsDiagonals,
  TigitaleIconsArrowsDiagonalsBltr,
  TigitaleIconsArrowsDiagonalsTlbr,
  TigitaleIconsArrowsHv,
  TigitaleIconsArrowTop,
  TigitaleIconsArrowTopLeft,
  TigitaleIconsArrowTopRight,
  TigitaleIconsArrowUndo
}
  from 'projects/tigitale-icons/src/lib/tigitale-icons';

import { TigitaleIconsRegistry } from 'projects/tigitale-icons/src/lib/tigitale-icons-registry';
import { TigitaleIconsModule } from 'projects/tigitale-icons/src/lib/tigitale-icons.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TigitaleIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private tigitaleIconRegistry: TigitaleIconsRegistry) {
    this.tigitaleIconRegistry.resgisterIcons([
      tigitaleIcons360,
      tigitaleIconsAdvertisement,
      tigitaleIconsAirplay,
      tigitaleIconsAlarm,
      tigitaleIconsAlarmChecked,
      tigitaleIconsAlarmMinus,
      tigitaleIconsAlarmNo,
      tigitaleIconsAlarmPlus,
      tigitaleIconsAlarmSnooze,
      tigitaleIconsAlertCircle,
      tigitaleIconsAlertOctagon,
      tigitaleIconsAlertTriangle,
      tigitaleIconsAppNotification,
      tigitaleIconsArrowBottom,
      TigitaleIconsArrowBottomLeft,
      TigitaleIconsArrowBottomRight,
      TigitaleIconsArrowForward,
      TigitaleIconsArrowForwardAll,
      TigitaleIconsArrowLeft,
      TigitaleIconsArrowLeftCurved,
      TigitaleIconsArrowRedo,
      TigitaleIconsArrowReply,
      TigitaleIconsArrowReplyAll,
      TigitaleIconsArrowRight,
      TigitaleIconAlarmMinusRightCurved,
      TigitaleIconsArrowsDiagonals,
      TigitaleIconsArrowsDiagonalsBltr,
      TigitaleIconsArrowsDiagonalsTlbr,
      TigitaleIconsArrowsHv,
      TigitaleIconsArrowTop,
      TigitaleIconsArrowTopLeft,
      TigitaleIconsArrowTopRight,
      TigitaleIconsArrowUndo
    ])
  }
}
