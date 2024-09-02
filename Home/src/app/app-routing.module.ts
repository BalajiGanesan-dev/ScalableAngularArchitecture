import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UI1ComponentV1 } from './domains/vertical1/UI/ui1/ui1.component';
import { UI1ComponentV3 } from './domains/vertical3/UI/ui1/ui1.component';
const routes: Routes = [
  {path:"Vertical1",component:UI1ComponentV1},
  {path:"Vertical2",loadChildren:()=>import('./domains/vertical2/vertical2.module').then(m=>m.Vertical2Module)},
  {path:"Vertical3",component:UI1ComponentV3},
  {path:"Vertical4",loadChildren:()=>import('./domains/vertical4/vertical4.module').then(m=>m.Vertical4Module)},
  {path:"",component:UI1ComponentV1}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
