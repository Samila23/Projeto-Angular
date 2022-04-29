import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfessoresGpComponent } from './listar-professores-gp/listar-professores-gp.component';
import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';

const routes: Routes =
[
    // ROTAS ESTATICAS PRECISAM VIM PRIMEIRO
    {path: 'professoresGp/criar', component: ProfessorGpFormComponent},
    {path: 'professoresGp', component: ListarProfessoresGpComponent},
    {path: 'professoresGp/editar/:id', component: ProfessorGpFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresGpRoutingModule { }
