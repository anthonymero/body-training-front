import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    CommonModule,
    SideMenuComponent
  ]
})
export class SharedModule { }
