import { Component } from '@angular/core';

@Component({
    selector: 'app-only-specific-countries',
    templateUrl: './only-specific-countries.component.html',
    styleUrls: ['./only-specific-countries.component.scss'],
    standalone: false
})
export class OnlySpecificCountriesComponent {
  allowedCountryCodes: string[] = ['us', 'in', 'af'];

  onCountryChange(country: any) {
    console.log(country);
  }
}
