import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  onAddExercice(): void {
    this.router.navigate(['exercices', 'new']);
  }

  onUpdateMyPhysic(): void {
    this.router.navigate(['physic', 'update']);
  }

}
