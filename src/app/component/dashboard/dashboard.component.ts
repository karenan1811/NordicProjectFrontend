import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  teams:any;

  constructor(private dashboardService:DashboardService ) { }

  ngOnInit(): void {
    this.getAllTeams();
  }
  getAllTeams(){
    this.dashboardService.getTeams().subscribe(res=>
      
      {console.log(res);
      this.teams=res;
      
      });
  }

}
