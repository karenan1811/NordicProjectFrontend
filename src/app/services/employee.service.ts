import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
urlSingleEmployee : string = 'https://localhost:55000/api/Employee/getsingleemployee?username=';
urlUpdateEmployee : string = 'https://localhost:55000/api/Employee/update';
urlEmployeeByTeamName : string = 'https://localhost:55000/api/Employee/getemployeesbyteamname?teamName=';
urlAddNewMemberTeam : string = 'https://localhost:55000/api/Employee/changeemployeeteam';

  constructor(private httpClient : HttpClient, private router :Router) {}
  getEmployeeByUsername(username:any){
    return this.httpClient.get(this.urlSingleEmployee + username);
  }
  updateEmployee(employee:any){
    return this.httpClient.post(this.urlUpdateEmployee, employee);
  }
  getEmployeeByTeamName(teamName:any){
    return this.httpClient.get(this.urlEmployeeByTeamName + teamName)
  }
  updateEmployeeTeam(data: any) {
    return this.httpClient.post(this.urlAddNewMemberTeam, data);
  }
}
