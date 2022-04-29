import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { ReativoFormComponent } from './reativo-form/reativo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MostrarMensagemComponent } from '../share/mostrar-mensagem/mostrar-mensagem.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    ReativoFormComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    //ReactiveFormsModule, // realizando o import de formulários reativo do angular
    ShareModule,
  ]
})
export class FormulariosModule { }
