import { Component } from '@angular/core';
import { IConfig } from 'ngx-countries-dropdown';

@Component({
    selector: 'app-config-properties-demo',
    templateUrl: './config-properties-demo.component.html',
    styleUrls: ['./config-properties-demo.component.scss'],
    standalone: false
})
export class ConfigPropertiesDemoComponent {

  config: IConfig = {};
  onCountryChange(country: any) {
    console.log(country);
  }
}
