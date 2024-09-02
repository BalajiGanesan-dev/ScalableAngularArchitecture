import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './feature/feature1/feature1.component';
export const routes:Routes=[
  {path:"",component:Feature1Component}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
