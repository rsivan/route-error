import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


const routes: Routes = [
  { path: '', redirectTo: '/view1', pathMatch: 'full' },
  { path: '', children: [
  { path: 'view1', component: View1Component, data: { permission: (r: any) => r.guide > 0 }},
  { path: 'view2', component: View2Component },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
