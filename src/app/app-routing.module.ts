import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MakeSuggestionComponent } from './component/make-suggestion/make-suggestion.component';
import { NewTeamComponent } from './component/new-team/new-team.component';
import { SignupComponent } from './component/signup/signup.component';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
import { TeamDetailsComponent } from './component/team-details/team-details.component';
import { TeamComponent } from './component/team/team.component';
import { UpdateSuggestionComponent } from './component/updatesuggestion/updatesuggestion.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'make-suggestion', component:MakeSuggestionComponent,canActivate:[AuthGuard]},
  {path: 'editemployee', component:EditEmployeeComponent,canActivate:[AuthGuard]},
  {path: 'suggestions', component:SuggestionComponent,canActivate:[AuthGuard]},
  {path: 'update-suggestion',component:UpdateSuggestionComponent,canActivate:[AuthGuard]},
   { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'teamdetails', component:TeamDetailsComponent,canActivate:[AuthGuard]},
  { path: 'new-team', component: NewTeamComponent,canActivate:[AuthGuard] },
  { path: 'team', component: TeamComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
