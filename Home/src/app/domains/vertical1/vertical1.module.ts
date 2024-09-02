import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature/feature1/feature1.component';
import { UI1ComponentV1 } from './UI/ui1/ui1.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    Feature1Component,
    UI1ComponentV1
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class Vertical1Module { }
