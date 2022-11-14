import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teams: any = [];
  currentTeam: any;
  teamId: string = '';
  constructor(private teamService: TeamService, private router: Router) {}
  getAllTeams() {
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
      console.log(this.teams);
    });
  }
  ngOnInit(): void {
    this.getAllTeams();
  }
  getTeam(team: any) {
    console.log(team);
    console.log(team.teamName);
    this.currentTeam = team;
  }
}
