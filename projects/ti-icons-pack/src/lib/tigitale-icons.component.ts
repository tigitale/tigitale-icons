import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { tigitaleIcon } from './tigitale-icons';
import { TigitaleIconsRegistry } from './tigitale-icons-registry';
import { DOCUMENT } from '@angular/common';

@Component({
  //selector: 'lib-tigitale-icons',
  selector: 'ti-icons',
  template: `
    <ng-content></ng-content>
  `,
  styles: [':host::ng-deep svg{width: 60px; height: 60px}'],
})
export class TigitaleIconsComponent {

  private svgIcon: SVGElement;

  @Input()
  set name(iconName: tigitaleIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.revomeChild(this.svgIcon);
    }
    const svgData = this.tigitaleIconsRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(private element: ElementRef,
    private tigitaleIconsRegistry: TigitaleIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any) { }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
