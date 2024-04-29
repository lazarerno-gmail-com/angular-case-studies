import { Component, OnInit } from '@angular/core';
import { CountryCode, isValidPhoneNumber, getExampleNumber, parsePhoneNumber  } from 'libphonenumber-js'
import examples from 'libphonenumber-js/mobile/examples'
import { Country } from '../../../Country';

@Component({
  selector: 'phone-validation-by-country',
  templateUrl: './phone-validation-by-country.component.html',
  styleUrl: './phone-validation-by-country.component.css'
})
export class PhoneValidationByCountryComponent implements OnInit {
  countryList: Country[] = this.getCountries();
  selectedCountryCode: CountryCode;
  enteredPhoneNumber: string;
  errorMessage: string;
  placeholder?: string;

  ngOnInit(): void {
    var countries = this.getCountries();
  }

  changeCountry(selectedCountry: string){
    this.selectedCountryCode = selectedCountry as CountryCode;
    this.errorMessage = '';
    const exampleNumber = getExampleNumber(this.selectedCountryCode, examples)
    this.placeholder = exampleNumber?.number;
  }

  onValidatePhoneNumber(){
    console.log(this.enteredPhoneNumber);
    console.log(this.selectedCountryCode);
    var isValid = isValidPhoneNumber(this.enteredPhoneNumber, this.selectedCountryCode);    
    const phoneNumber = parsePhoneNumber(this.enteredPhoneNumber, this.selectedCountryCode);
    if(isValid && this.selectedCountryCode === phoneNumber.country)
      alert("Phone number is valid");
    else
      this.ShowError();
    console.log('phoneNumber.isValid: ' + phoneNumber.isValid());
    console.log(phoneNumber);
  }

  onPhoneNumberChanged(){
    console.log('Phone number changed');
    this.errorMessage='';
  }

  getCountries(): Country[] {
    return [
      {"name": "Germany", "code": "DE"},
      {"name": "Austria", "code": "AT"}
    ];
  }

  ShowError(){
    this.errorMessage = "The entered phone number is invalid!"
  }
}
