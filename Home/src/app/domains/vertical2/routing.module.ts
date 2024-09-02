import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UI1Component } from './UI/ui1/ui1.component'
export const routes:Routes=[
  {path:"",component:UI1Component}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
