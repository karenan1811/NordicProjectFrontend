import { HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-make-suggestion',
  templateUrl: './make-suggestion.component.html',
  styleUrls: ['./make-suggestion.component.css'],
})
export class MakeSuggestionComponent implements OnInit {
  suggestionForm!: FormGroup;
  currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  selectedImage: any;
  constructor(
    private suggestionService: SuggestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.formBuilder.group({
      suggestionTitle: ['', Validators.required],
      suggestionDescription: ['', Validators.required],
      priorityLevel: '',
      suggestionDate: [new Date('1000-01-01'), Validators.required],
      suggestionResult: '',
      suggestionStatus: '',
      suggestionGiver: this.currentUser.username,
      suggestionDeadline: new Date('1000-01-01'),
      teamName: '',    
    });
  }

  onMakeSuggestion() {
    console.log(this.suggestionForm.value);
    if (this.suggestionForm.valid) {
      this.suggestionService.addSuggestion(this.suggestionForm.value).subscribe(
        (res) => {
          alert('New suggestion registered');
          this.suggestionForm.reset();
          this.router.navigate(['dashboard']);
        },
        (error) => {
          alert(error.error.message);
          console.log(error);
        }
      );
    } else {
      alert('Invalid Signup Form');
      //throw error for invalid form
      this.validateAllFormFields(this.suggestionForm);
    }
  }
  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
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

