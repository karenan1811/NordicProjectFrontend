import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../services/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userRole: any;

  constructor(private authService:SignupService, private router:Router){}
  canActivate()
  {
    this.userRole=this.authService.getEmployeeRole();
   if(this.userRole==='Admin') return true;
   else{
    alert('You are not authorized');
    return false;
   } 
  }
  
  
}
