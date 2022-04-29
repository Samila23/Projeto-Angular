import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReativoFormComponent } from './reativo-form/reativo-form.component';

const routes: Routes =
[
  {path: 'formularios/reativo-form', component: ReativoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
