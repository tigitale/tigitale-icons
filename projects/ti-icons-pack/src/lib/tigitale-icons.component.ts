import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { tigitaleIcon } from './tigitale-icons';
import { TigitaleIconsRegistry } from './tigitale-icons-registry';
import { DOCUMENT } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ti-icons',
  templateUrl: './tigitale-icons.component.html',
  styleUrls: ['./tigitale-icons.component.css']
})
export class TigitaleIconsComponent {

  svgIcon: SVGElement;

  iconName: tigitaleIcon;
  iconId: string;

  @Input()
  set name(iconName: tigitaleIcon) {
    this.iconName = iconName;
    if (!this.iconId) {
      this.iconId = Math.random() + '-tigitale-icon';
    }

    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }

    const svgData = this.tigitaleIconsRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.svgIcon.setAttribute('id', this.iconId);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  @Input()
  set color(color: string) {
    const svg = document.getElementById(this.iconId) as unknown as SVGElement;
    const path = svg.getElementsByTagName('g')[0].getElementsByTagName('path')[0];
    path.style.fill = color;
  }

  @Input()
  set width(width: string) {
    const svg = document.getElementById(this.iconId) as unknown as SVGElement;
    svg.setAttribute('width', width);
    svg.style.width = width;
    this.element.nativeElement.style.width = width;
  }

  @Input()
  set height(height: string) {
    const svg = document.getElementById(this.iconId) as unknown as SVGElement;
    svg.setAttribute('height', height);
    svg.style.height = height;
    this.element.nativeElement.style.height = height;
  }

  constructor(private element: ElementRef,
              private tigitaleIconsRegistry: TigitaleIconsRegistry,
              @Optional() @Inject(DOCUMENT) private document: any) {
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
