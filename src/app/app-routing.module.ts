import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCountryListComponent } from './components/default-country-list/default-country-list.component';
import { PreferredCountriesComponent } from './components/preferred-countries/preferred-countries.component';
import { BlockedCountriesComponent } from './components/blocked-countries/blocked-countries.component';
import { DefaultSelectCountryComponent } from './components/default-select-country/default-select-country.component';
import { OnlySpecificCountriesComponent } from './components/only-specific-countries/only-specific-countries.component';
import { DialCodeListComponent } from './components/dial-code-list/dial-code-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { ConfigPropertiesDemoComponent } from './components/config-properties-demo/config-properties-demo.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'default'},
  {path: 'default', component: DefaultCountryListComponent},
  {path: 'preferred', component: PreferredCountriesComponent},
  {path: 'without', component: BlockedCountriesComponent},
  {path: 'selected', component: DefaultSelectCountryComponent},
  {path: 'specific', component: OnlySpecificCountriesComponent},
  {path: 'dialcode', component: DialCodeListComponent},
  {path: 'language', component: LanguageListComponent},
  {path: 'config', component: ConfigPropertiesDemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
