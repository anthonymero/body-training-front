import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhysicComponent } from './physic/physic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingSessionsComponent } from './training-sessions/training-sessions.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'exercices',
    component: ExercicesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'physic',
    component: PhysicComponent
  },
  {
    path: 'trainings',
    component: TrainingSessionsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
