import { Injectable } from '@angular/core';
import { TigitaleIconsRegistry } from './tigitale-icons-registry';
import { tigitaleIcon } from './tigitale-icons';

@Injectable({
  providedIn: 'root'
})
export class TigitaleIconsService {

  constructor(private tigitaleIconsRegistry: TigitaleIconsRegistry) { }

  getIcon(icon: tigitaleIcon) {
    return this.tigitaleIconsRegistry.getIcon(icon);
  }
}
