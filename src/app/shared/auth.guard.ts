import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../services/signup.service';;
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:SignupService, private router:Router){}
  canActivate()
  {
   if(this.authService.isLoggedIn()) return true;
   else{
    this.router.navigate(['login']);
    return false;
   } 
  }
  
}
