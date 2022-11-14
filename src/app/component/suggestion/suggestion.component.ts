import { Component, OnInit } from '@angular/core';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  suggestions: any;
  currentTeam: any;
  currentTeamId: any;
  currentSuggestion: any;

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.getAllSuggestions();
  }
  getAllSuggestions() {
    this.suggestionService.getSuggestions().subscribe((res) => {
      this.suggestions = res;
    });
  }
  getCurrentSuggestion(suggestion: any) {
    this.currentSuggestion = suggestion;
    localStorage.setItem('current suggestion', JSON.stringify(suggestion));
  }
}
