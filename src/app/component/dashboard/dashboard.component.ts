import { SignupService } from './../../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { EmployeeService } from 'src/app/services/employee.service';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  employee: any;
  suggesListOfCurrentUser: any;
  constructor(
    private signupService: SignupService,
    private router: Router,
    private employeeService: EmployeeService,
    private suggestionService: SuggestionService
  ) {}
  setCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  }

  ngOnInit(): void {
    this.setCurrentUser();
    this.getEmployee();
    this.getSuggestionOfUser();
    console.log('********************************');
    //console.log(this.currentUser);
    console.log('********************************');
    console.log(this.currentUser.username);
  }
  getEmployee() {
    this.employeeService
      .getEmployeeByUsername(this.currentUser.username)
      .subscribe((res) => {
        this.employee = res;
      });
  }
  getSuggestionOfUser() {
    this.suggestionService
      .getSuggestionByUsername(this.currentUser.username)
      .subscribe(
        (res) => {
          if (res) {
            this.suggesListOfCurrentUser = res;
          }
        },
        (error) => {
          alert(error.error);
        }
      );
  }
}
