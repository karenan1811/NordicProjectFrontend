import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  messageClass = '';
  message = '';
  employeeId: any;
  editData: any;
  responseData: any;
  textType: string = 'password';
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;
  private currentUserSource = new ReplaySubject<User>(1);
  currenUser$ = this.currentUserSource.asObservable();
  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {
    localStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  showPassword() {
    if (this.textType == 'password') {
      this.textType = 'text';
      this.eyeIcon = 'fa-eye';
    } else {
      this.textType = 'password';
      this.eyeIcon = 'fa-eye-slash';
    }
  }
  onLogin() {
    if (this.loginForm.valid) {
      //Send to database
      console.log(this.loginForm.value);
      this.signupService.login(this.loginForm.value).subscribe(
        (res:any) => {
          if (res != null) {
            console.log(res);
            const user = res;
            //this.responseData = res.message;
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res));
            localStorage.setItem('username', JSON.stringify(res.username));
            localStorage.setItem('employeerole',JSON.stringify(res.employeeRole))
            this.currentUserSource.next(user);
            //localStorage.setItem('username', res.username);
            //alert(res.message);
            // console.log(this.responseData);
            //this.loginForm.reset();
            this.router.navigate(['dashboard']);
          }
        },
        (error: any) => {
          alert(error.error);
          console.log(error);
        }
      );
    } else {
      alert('Invalid Form');
      //throw error for invalid form
      this.validateAllFormFields(this.loginForm);
    }
  }
  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
  
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
