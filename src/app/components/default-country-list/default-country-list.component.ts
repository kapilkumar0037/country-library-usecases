import { Component } from '@angular/core';

@Component({
  selector: 'app-default-country-list',
  templateUrl: './default-country-list.component.html',
  styleUrls: ['./default-country-list.component.scss']
})
export class DefaultCountryListComponent {
  readonly placeholderText = "Select";
}
