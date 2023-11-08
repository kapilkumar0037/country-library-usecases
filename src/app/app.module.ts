import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { PreferredCountriesComponent } from './components/preferred-countries/preferred-countries.component';
import { BlockedCountriesComponent } from './components/blocked-countries/blocked-countries.component';
import { DefaultSelectCountryComponent } from './components/default-select-country/default-select-country.component';
import { DialCodeListComponent } from './components/dial-code-list/dial-code-list.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { ConfigPropertiesDemoComponent } from './components/config-properties-demo/config-properties-demo.component';
import { OnlySpecificCountriesComponent } from './components/only-specific-countries/only-specific-countries.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PreferredCountriesComponent,
    BlockedCountriesComponent,
    DefaultSelectCountryComponent,
    DialCodeListComponent,
    CurrencyListComponent,
    LanguageListComponent,
    ConfigPropertiesDemoComponent,
    OnlySpecificCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCountriesDropdownModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
