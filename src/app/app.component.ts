import { Component , OnInit} from '@angular/core';
import { home} from './global';
import {FieldDataService} from './field-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  ngOnInit(){
    
    console.log(home);
  }
  constructor(private data:FieldDataService){

  }
  saveData(){
    this.data.saveData();
  }
}
export const creditCardType = [
  "Select Credit Card",
  "MasterCard",
  "Visa",
  "Discover"
];
export const months = [
  {"name":"January","num":"01"},
  {"name":"February","num":"02"},
  {"name":"March","num":"03"},
  {"name":"April","num":"04"},
  {"name":"May","num":"05"},
  {"name":"June","num":"06"},
  {"name":"July","num":"07"},
  {"name":"August","num":"08"},
  {"name":"September","num":"09"},
  {"name":"October","num":"10"},
  {"name":"November","num":"11"},
  {"name":"December","num":"12"}
];
export const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"				
];