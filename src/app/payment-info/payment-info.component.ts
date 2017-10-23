import { Component, OnInit } from '@angular/core';
import {months , creditCardType,states} from '../app.component';
import {FieldDataService} from '../field-data.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {
  creditCardType = [];
  months = [];
  states = [];
  constructor(private data:FieldDataService) { }

  //Form Vars
  check;selectedCard;cardholdername;cardNo;cvv;selectedMonth;selectedYear;
  address1;address2;address3;city;selectedState;auth_per;aut_per_tit;zip;
  ngOnInit() {
    this.months = months;
    this.creditCardType = creditCardType;
    this.states = states; 
  }
  savePaymentDetails(){
    this.data.paymentDetails.push({
      "company_card_chk":this.check,
      "cardType":this.selectedCard,
      "CardHolder":this.cardholdername,
      "cardNo":this.cardNo,
      "CVV":this.cvv,
      "selectedMonth":this.selectedMonth,
      "selectedYr":this.selectedYear,
      "add1":this.address1,
      "add2":this.address2,
      "add3":this.address3,
      "city":this.city,
      "zip":this.zip,
      "selectedState":this.selectedState,
      "AuthorisedPerson":this.auth_per,
      "PersonTitle":this.aut_per_tit
    })
  }
  
}
       