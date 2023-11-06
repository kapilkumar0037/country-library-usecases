import { Component } from '@angular/core';

@Component({
  selector: 'app-default-select-country',
  templateUrl: './default-select-country.component.html',
  styleUrls: ['./default-select-country.component.scss']
})
export class DefaultSelectCountryComponent {
  onCountryChange(country: any) {
    console.log(country);
  }
}
