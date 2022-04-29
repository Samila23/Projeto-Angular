import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

const routes: Routes =
[
  // ROTAS ESTATICAS PRECISAM VIM PRIMEIRO
  {path: 'professores/criar', component: ProfessorFormComponent},
  {path: 'professores', component: ListarComponent},
  {path: 'professores/editar/:id', component: ProfessorFormComponent},
 // {path: 'professores/:id', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresRoutingModule { }
