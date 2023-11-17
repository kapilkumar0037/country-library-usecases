import { Component } from '@angular/core';
import { IConfig } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-dial-code-list',
  templateUrl: './dial-code-list.component.html',
  styleUrls: ['./dial-code-list.component.scss']
})
export class DialCodeListComponent {
  selectedCountryConfig: IConfig = {
    hideCode: true,
    hideName: true
  };
  countryListConfig: IConfig = {
    hideCode: true,
    
  };
  onCountryChange(country: any) {
    console.log(country);
  }
}
