import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { PhysicComponent } from './physic/physic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrainingSessionsComponent } from './training-sessions/training-sessions.component';
import { ExerciceDetailComponent } from './exercices/exercice-detail/exercice-detail.component';
import { ExerciceFormComponent } from './exercices/exercice-form/exercice-form.component';
import { PhysicFormComponent } from './physic/physic-form/physic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ExercicesComponent,
    PhysicComponent,
    DashboardComponent,
    PageNotFoundComponent,
    TrainingSessionsComponent,
    ExerciceDetailComponent,
    ExerciceFormComponent,
    PhysicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
