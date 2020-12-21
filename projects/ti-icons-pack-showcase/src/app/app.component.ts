import { Component, OnInit } from '@angular/core';
import { TigitaleIconsService } from '../../../ti-icons-pack/src/lib/tigitale-icons.service';
import { TigitaleIconsComponent } from '../../../ti-icons-pack/src/lib/tigitale-icons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private tigitaleIconsService: TigitaleIconsService) {
  }

  ngOnInit(): void {
    const iconInsideDiv = document.getElementById('icon-inside') as HTMLDivElement;
    const svgData = this.tigitaleIconsService.getIcon('wi-fi');
    const svg = TigitaleIconsComponent.svgElementFromString(svgData);
    iconInsideDiv.appendChild(svg);
  }
}
