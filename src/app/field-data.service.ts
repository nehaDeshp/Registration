import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers,ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class FieldDataService {

  companyDetails = [];
  contactDetails = [];
  paymentDetails = [];
  postRequestSub;
  url = "https://test2.atkku.com";
  constructor(private http:Http) {
    
  }
  jsonObj = [];
  saveData(){
    this.jsonObj.push(
      {
        "Company" : this.companyDetails,
        "Contact" : this.contactDetails,
        "Payment":this.paymentDetails
      }
    );

    console.log(this.jsonObj);   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    var obsRequest = this.http.post(this.url, this.jsonObj, options)
    .map(res => res.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );

    obsRequest.subscribe((response)=> console.log(response));
  }
}
