import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {RouterModule,Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import {FieldDataService} from './field-data.service';

const routes = [
  {path:'',component:HomeComponent},
  { path:'registration', 
    component:RegistrationComponent, 
    children:[
      {path:'registration/company', component:CompanyDetailsComponent},
      {path:'registration/contact', component:ContactInfoComponent},
      {path:'registration/payment',component:PaymentInfoComponent}
    ]
  },
  {path:'confirmation',component:ConfirmationComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    ConfirmationComponent,
    CompanyDetailsComponent,
    ContactInfoComponent,
    PaymentInfoComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,
    HttpModule
  ],
  providers: [FieldDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
