import { Component } from '@angular/core';

import { Country } from './models/country';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  countryArray: Country[] = [

    {id: 1, country: "Colombia", city: "Barranquilla"},
    {id: 2, country: "México", city: "Monterrey"},
    {id: 3, country: "Argentina", city: "Buenos Aires"},

  ];

  selectedCountry: Country = new Country ();
  selected2Country: Country = new Country ();

  openForEdit(country : Country){

    this.selectedCountry = country;
    

  }
  
  delete(country : Country){

    this.selected2Country = country;
    
    if (confirm('Seguro que quiere eliminar esta información?')  ) {
    
      this.countryArray = this.countryArray.filter(i => i != this.selected2Country);
      
      this.selected2Country = new Country();


      }



  }



  


  addOrEdit(){

    if (this.selectedCountry.id === 0 ) {
      this.selectedCountry.id = this.countryArray.length + 1;
      this.countryArray.push(this.selectedCountry);

    }



    this.selectedCountry = new Country();

    
    
  }


}
