import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { AnatomyComponent } from './components/anatomy/anatomy.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SideMenuComponent, AnatomyComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AppMaterialModule,
    CommonModule,
    SideMenuComponent,
    AnatomyComponent
  ]
})
export class SharedModule { }
