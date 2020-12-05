import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { EmployeeComponent } from './employee/allemployee/allemp.component';
import { EmpDetailsComponent } from './employee/detailsofemployee/detemp.component';
import { AddEmpComponent } from './employee/addnewemployee/addemp.component';
import { EmplistComponent } from './employee/employeelist/emplist.component';
import { HomeComponent } from './home/mainhome/home.component';
import { AboutComponent } from './home/aboutus/aboutus.component';
import { ContactComponent } from './home/contactus/contactus.component';
import { PageNotFoundComponent } from './pagenotfound/pagenfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,RegisterComponent,
    EmployeeComponent,EmpDetailsComponent,AddEmpComponent,EmplistComponent,
    HomeComponent,AboutComponent,ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [EmployeeService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
