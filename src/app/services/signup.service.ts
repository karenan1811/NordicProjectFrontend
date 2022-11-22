import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
signupUrl:string="https://localhost:55000/api/Auth/register";
loginUrl:string="https://localhost:55000/api/Auth/login";
  constructor(private httpClient:HttpClient, private router:Router) { }
  employeeRegister(employee:any){
 return this.httpClient.post(this.signupUrl,employee);
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  isLoggedOut(){
   localStorage.removeItem('token');
   localStorage.removeItem('user');
   localStorage.removeItem('username');
   localStorage.removeItem('employeerole');
   this.router.navigate(['/']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getEmployeeRole(){
    return JSON.parse(localStorage.getItem('employeerole')||'{}');
  }
  getCurrentUser() {
    return localStorage.getItem('user');
  }
  login(employee:any){
return this.httpClient.post(this.loginUrl,employee);
  }
}
