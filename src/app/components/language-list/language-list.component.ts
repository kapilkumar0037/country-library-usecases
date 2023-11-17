import { Component } from '@angular/core';
import { IConfig } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent {
  selectedCountryConfig: IConfig = {
    hideCode: true,
    hideName: true,
    hideDialCode: true,
    displayLanguageCode: true
  };
  countryListConfig: IConfig = {
    hideCode: true,
    hideDialCode: true,
    displayLanguageCode: true    
  };
  onCountryChange(country: any) {
    console.log(country);
  }
}
