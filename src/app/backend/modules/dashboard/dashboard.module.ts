import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { dashBoardRouter } from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      dashBoardRouter
    )
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [

  ]
})
export class DashboardModule { }
