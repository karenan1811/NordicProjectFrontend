import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 urlTeams = "https://localhost:7116/api/Team";
  constructor(private httpClient:HttpClient) { }
  getTeams(){
    return this.httpClient.get(this.urlTeams);
  }
}
