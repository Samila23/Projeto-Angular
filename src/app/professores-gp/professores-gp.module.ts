import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresGpRoutingModule } from './professores-gp-routing.module';
import { ListarProfessoresGpComponent } from './listar-professores-gp/listar-professores-gp.component';
import { share } from 'rxjs';
import { ShareModule } from '../share/share.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorGpFormComponent } from './professor-gp-form/professor-gp-form.component';


@NgModule({
  declarations: [
    ListarProfessoresGpComponent,
    ProfessorGpFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresGpRoutingModule,
    ShareModule,
    HttpClientModule,
  ],
  exports:[
    ListarProfessoresGpComponent,
  ]
})
export class ProfessoresGpModule { }
