import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatTabsModule} from '@angular/material/tabs'

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
