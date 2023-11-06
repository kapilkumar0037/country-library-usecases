import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCountriesDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
