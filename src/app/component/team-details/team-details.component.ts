import { SuggestionService } from 'src/app/services/suggestion.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { ChangeTeam } from 'src/app/models/changeTeam';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit {
  teams: any = [];
  currentTeam: any;
  employees: any;
  suggestions: any;
  teamName : any;
  firstName: string = '';
  lastName: string = '';
  changeTeamDto: ChangeTeam = {
    firstName: '',
    lastName: '',
    teamName: '',
  };
  constructor(
    private teamService: TeamService,
    private employeeService: EmployeeService,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.getAllTeams();
  }
  getAllTeams() {
    this.teamService.getTeams().subscribe((res) => {
      this.teams = res;
    });
  }
  getTeam(team: any) {
    this.currentTeam = team;
    this.teamName = team.teamName;
    console.log(this.teamName);
    this.changeTeamDto.teamName = this.teamName;
    this.employeeService.getEmployeeByTeamName(this.teamName).subscribe((res) => {
      this.employees = res;
      console.log(this.employees);
    });
    this.suggestionService
      .getSuggestionByTeamName(team.teamName)
      .subscribe((res) => {
        this.suggestions = res;
        console.log(this.suggestions);
        console.log(team.teamName);
      });
  }
  makeCurrentTeamActive(team: any) {
    if (team == this.currentTeam) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  keyUp(value: string) {
    this.changeTeamDto.firstName = value;
    console.log(this.changeTeamDto.firstName);
  }
  onKeyUp(value: string) {
    this.changeTeamDto.lastName = value;
    console.log(this.changeTeamDto.lastName);
  }
  addNewMember() {
    console.log(this.changeTeamDto);
    if (this.changeTeamDto != null) {
      this.employeeService
        .updateEmployeeTeam(this.changeTeamDto)
        .subscribe((res) => {
          console.log(this.changeTeamDto);
          window.location.reload();
          alert(
            'New Member Added' +
              this.changeTeamDto.lastName +
              ' ' +
              this.changeTeamDto.lastName
          );
        });
    }
  }
}
