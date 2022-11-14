import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  baseUrl: string = 'https://localhost:7116/api/Team';
  addUrl: string = 'https://localhost:7116/api/Team/add';
  constructor(private httpClient: HttpClient) {}
  getTeams() {
    return this.httpClient.get(this.baseUrl);
  }
  addTeam(team: any) {
    return this.httpClient.post(this.addUrl, team);
  }
}
