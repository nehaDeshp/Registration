import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {states} from '../app.component';
import {FieldDataService} from '../field-data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  //data Variables
  companyname;dba;tax_id;address1;address2;address3;city;selectedState;
  zip;main_cnct;fax_no;website_name;
  company_det = [];
  states = [] ;
  
  constructor(private data:FieldDataService) {
  }
  ngOnInit() {
    this.states = states;  
  }
  onSubmit(formData){
    this.data.saveData();
  }
  saveCompanyDetails(){
    this.data.companyDetails.push({
      "Company_name" : this.companyname,
      "Doing Business As" : this.dba,
      "Tax ID":this.tax_id,
      "Address1" : this.address1,
      "Address2" : this.address2,
      "Address3" : this.address3,
      "City":this.city,
      "State":this.selectedState,
      "Zipcode":this.zip,
      "Main Contact":this.main_cnct,
      "Fax":this.fax_no,
      "Website":this.website_name
    });
  }
}
