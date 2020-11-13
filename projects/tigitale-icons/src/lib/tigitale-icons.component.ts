import { ChangeDetectionStrategy, Component, Input, ElementRef } from '@angular/core';
import { tigitaleIcons } from './tigitale-icons';

@Component({
  selector: 'lib-tigitale-icons',
  template: `
  <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TigitaleIconsComponent {

  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = tigitaleIcons[iconName] || null;
  }

  constructor(private element: ElementRef) { }



}
