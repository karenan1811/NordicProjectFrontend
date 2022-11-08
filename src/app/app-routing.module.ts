import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MakeSuggestionComponent } from './component/make-suggestion/make-suggestion.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'make-suggestion', component:MakeSuggestionComponent},
  {path: 'editemployee', component:EditEmployeeComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
