import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css'],
})
export class NewTeamComponent implements OnInit {
  teamForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      teamLeader: ['', Validators.required],
    });
    this.onClick();
  }
  onClick() {
    if (this.teamForm.valid) {
      //Send to database
      console.log(this.teamForm.value);
      this.teamService.addTeam(this.teamForm.value).subscribe(
        (res) => {
          alert('New team registered');
          this.teamForm.reset();
          this.router.navigate(['teamdetails']);
        },
        (error) => {
          alert(error.error.message);
          console.log(error);
        }
      );
    } else {
      //throw error for invalid form
      this.validateAllFormFields(this.teamForm);
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
