import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardLayoutComponent } from './layouts/dash-board-layout/dash-board-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
