import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/allemployee/allemp.component';
import { AboutComponent } from './home/aboutus/aboutus.component';
import { ContactComponent } from './home/contactus/contactus.component';
import { HomeComponent } from './home/mainhome/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenfound.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutComponent},
  {path:"contactus",component:ContactComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:PageNotFoundComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
