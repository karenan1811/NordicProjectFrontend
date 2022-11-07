import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
urlSingleEmployee : string = 'https://localhost:7116/api/Employee/getsingleemployee?username=';

  constructor(private httpClient : HttpClient, private router :Router) {}
  getEmployeeByUsername(username:any){
    return this.httpClient.get(this.urlSingleEmployee + username);
  }
}
