import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
 
  constructor(private signupService:SignupService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      passwordHash: '',
      passwordSalt: '',
      password: ['', Validators.required],
      email: ['', Validators.required],
      address: '',
      phoneNumber: '',
      birthday: '',
      employmentStartDate: '',
      jobTitle: '',
      teamName: '',
      employeeRole:''
  });
}
onSignUp() {
  if (this.signupForm.valid) {
    //Send to database
    console.log(this.signupForm.value);
    this.signupService.employeeRegister(this.signupForm.value).subscribe(
      (res) => {
        alert('New employee registered');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      (error) => {
        alert(error.error.message);
        console.log(error);
      }
    );
  } else {
    alert('Invalid Signup Form');
    //throw error for invalid form
    this.validateAllFormFields(this.signupForm);
  }
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
