import { Component, OnInit } from '@angular/core';
import {FieldDataService} from '../field-data.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  name;title;email;contact;cell;
  constructor(private data: FieldDataService) { }

  ngOnInit() {
  }

  saveContactDetails(){
    this.data.contactDetails.push({
      "Name" : this.name,
      "Title":this.title,
      "Email":this.email,
      "Contact":this.contact,
      "Cell": this.cell
    });
  }

}
