import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-updatesuggestion',
  templateUrl: './updatesuggestion.component.html',
  styleUrls: ['./updatesuggestion.component.css'],
})
export class UpdateSuggestionComponent implements OnInit {
  suggestionForm!: FormGroup;
  currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  selectedImage: any;
  currentSuggestion = JSON.parse(
    localStorage.getItem('current suggestion') || '{}'
  );
  constructor(
    private suggestionService: SuggestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.formBuilder.group({
      suggestionId: this.currentSuggestion.suggestionId,
      suggestionTitle: '',
      suggestionGiver: '',
      priorityLevel: '',
      suggestionStatus: '',
      teamName: '',
      suggestionDeadline: new Date('10/10/2000'),
      suggestionResult: '',
      suggestionDescription: '',
    });
  }
  onUpdateSuggestion() {
    console.log(this.suggestionForm.value);
    if (this.suggestionForm.valid) {
      this.suggestionService
        .updateSuggestion(this.suggestionForm.value)
        .subscribe(
          (res) => {
            alert('Suggestion updated');
            this.suggestionForm.reset();
            this.router.navigate(['suggestions']);
          },
          (error) => {
            alert(error.error.message);
            console.log(error);
          }
        );
    } else {
      alert('Invalid Update Form');
      //throw error for invalid form
      this.validateAllFormFields(this.suggestionForm);
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
