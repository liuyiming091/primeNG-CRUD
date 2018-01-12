import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {DataService} from './data.service';
import {MemberdataService} from './memberdata.service';
import {CreateCustomerComponent} from './create-customer/create-customer.component';

import {enableProdMode} from '@angular/core';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CaptchaModule,
  CheckboxModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  InputMaskModule,
  InputTextModule,
  MessagesModule,
  MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  TabViewModule } from 'primeng/primeng';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersComponent,
    CreateCustomerComponent,
    SearchCustomersComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //primeNG
    AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CaptchaModule,
  CheckboxModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  InputMaskModule,
  InputTextModule,
  MessagesModule,
  MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  TabViewModule,
  ],
  providers: [DataService,MemberdataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
