import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  url: string ='https://localhost:7116/api/Suggestion';
  urlUpdateSuggestion: string = 'https://localhost:7116/api/Suggestion/update';
  urlAddSuggestion: string ='https://localhost:7116/api/Suggestion/add';
  urlSuggestionByUsername: string = 'https://localhost:7116/api/Suggestion/getsuggestionbyusername?userName=';
  urlSuggestionByTeamName : string = 'https://localhost:7116/api/Suggestion/getsuggestionbyteamname?teamName=';
  
  constructor(private httpClient: HttpClient) { }
getSuggestions(){
  return this.httpClient.get(this.url);
}
getSuggestionByUsername(username: any ){
  return this.httpClient.get(this.urlSuggestionByUsername + username);
}
 addSuggestion(suggestion:any){
  return this.httpClient.post(this.urlAddSuggestion, suggestion);
 }
 updateSuggestion(suggestion:any){
  return this.httpClient.post(this.urlUpdateSuggestion, suggestion);
 }
 getSuggestionByTeamName(teamName:any){
  return this.httpClient.get(this.urlSuggestionByTeamName + teamName);
 }
}
