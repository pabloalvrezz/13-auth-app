import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBoardLayoutComponent } from './layouts/dash-board-layout/dash-board-layout.component';


@NgModule({
  declarations: [
    DashBoardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
