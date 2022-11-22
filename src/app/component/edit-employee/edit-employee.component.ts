import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  updateForm!: FormGroup;
  currentUser: any = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      username: this.currentUser.username,
      email: '',
      address: '',
      phoneNumber: '',
      birthday: new Date('1000-01-01'),
      employmentStartDate: new Date('1000-01-01'),
      jobTitle: '',
      teamName:'',
      employeeRole:''
    });
  }
  onUpdate() {
    if (this.updateForm.valid) {
      //Send to database
      console.log(this.updateForm.value);
      this.employeeService.updateEmployee(this.updateForm.value).subscribe(
        (res) => {
          alert('Employee is updated');
          this.updateForm.reset();
          this.router.navigate(['dashboard']);
        },
        (error) => {
          alert(error.error.message);
          console.log(error);
        }
      );
    } else {
      alert('Invalid Update Form');
      //throw error for invalid form
      this.validateAllFormFields(this.updateForm);
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
