import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ElementRef, Optional, Inject } from '@angular/core';
import { TigitaleIconsRegistry } from './tigitale-icons.registry';

@Component({
  selector: 'lib-tigitale-icons',
  template: `
  <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TigitaleIconsComponent {

  private svgIcon: SVGElement;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.revomeChild(this.svgIcon);
    }
    const svgData = this.tigitaleIconsRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);

  }

  constructor(private element: ElementRef, private tigitaleIconsRegistry: TigitaleIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any) { }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
