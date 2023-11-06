import { Component } from '@angular/core';

@Component({
  selector: 'app-preferred-countries',
  templateUrl: './preferred-countries.component.html',
  styleUrls: ['./preferred-countries.component.scss']
})
export class PreferredCountriesComponent {
  preferredCountryCodes: string[] = ['us', 'in'];

  onCountryChange(country: any) {
    console.log(country);
  }
}
