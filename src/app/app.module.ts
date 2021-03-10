import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { BillingsuccessComponent } from './billingsuccess/billingsuccess.component';
// import { AllbillComponent } from './allbill/allbill.component';  
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    BillingsuccessComponent,
    // AllbillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
