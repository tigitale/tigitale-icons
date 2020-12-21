import { NgModule } from '@angular/core';
import { TigitaleIconsComponent } from './tigitale-icons.component';
import { TigitaleIconsRegistry } from './tigitale-icons-registry';
import { TigitaleIconsService } from './tigitale-icons.service';

@NgModule({
  declarations: [TigitaleIconsComponent],
  imports: [
  ],
  exports: [TigitaleIconsComponent],
  providers: [TigitaleIconsService, TigitaleIconsRegistry]
})
export class TigitaleIconsModule { }
