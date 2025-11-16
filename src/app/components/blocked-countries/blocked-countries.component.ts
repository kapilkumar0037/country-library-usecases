import { Component } from '@angular/core';

@Component({
    selector: 'app-blocked-countries',
    templateUrl: './blocked-countries.component.html',
    styleUrls: ['./blocked-countries.component.scss'],
    standalone: false
})
export class BlockedCountriesComponent {
  blockedCountryCodes: string[] = ['al'];

  onCountryChange(country: any) {
    console.log(country);
  }
}
