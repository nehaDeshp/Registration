import { Component, OnInit } from '@angular/core';
import { home} from '../global';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  companyname:String;
  dba:String;
  tax_is:String;
  id='';
  home=true;
  constructor() {
   
   
  
  }

  ngOnInit() {
    console.log(home);
   
    
  }
  
}
