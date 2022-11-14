import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MakeSuggestionComponent } from './component/make-suggestion/make-suggestion.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
import { UpdateSuggestionComponent } from './component/updatesuggestion/updatesuggestion.component';
import { TeamComponent } from './component/team/team.component';
import { NewTeamComponent } from './component/new-team/new-team.component';
import { TeamDetailsComponent } from './component/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    MakeSuggestionComponent,
    EditEmployeeComponent,
    SuggestionComponent,
    UpdateSuggestionComponent,
    TeamComponent,
    NewTeamComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
