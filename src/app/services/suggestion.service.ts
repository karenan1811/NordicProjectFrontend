import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  url: string ='https://localhost:7116/api/Suggestion';
  urlSuggestionByUsername: string = 'https://localhost:7116/api/Suggestion/getsuggestionbyusername?userName=';

  constructor(private httpClient: HttpClient) { }
getAllSuggestion(){
  return this.httpClient.get(this.url);
}
getSuggestionByUsername(username: any ){
  return this.httpClient.get(this.urlSuggestionByUsername + username);
}
}
