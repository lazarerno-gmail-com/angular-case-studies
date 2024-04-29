import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneValidationComponent } from './phone-validation/phone-validation.component';
import { PhoneValidationByCountryComponent } from './phone-validation/features/phone-validation-by-country/phone-validation-by-country.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneValidationComponent,
    PhoneValidationByCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
