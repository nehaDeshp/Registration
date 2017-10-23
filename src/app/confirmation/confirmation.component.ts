import { Component, OnInit } from '@angular/core';
import {FieldDataService} from '../field-data.service';
import {saveAs as importedSaveAs} from "file-saver";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private data:FieldDataService) { }

  ngOnInit() {
  }

}
