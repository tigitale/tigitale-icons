import { NgModule } from '@angular/core';
import { TigitaleIconsComponent } from './tigitale-icons.component';
import { TigitaleIconsRegistry } from './tigitale-icons-registry';

@NgModule({
  declarations: [TigitaleIconsComponent],
  imports: [
  ],
  exports: [TigitaleIconsComponent],
  providers: [TigitaleIconsRegistry]
})
export class TigitaleIconsModule { }
