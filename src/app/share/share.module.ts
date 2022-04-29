import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarMensagemComponent } from './mostrar-mensagem/mostrar-mensagem.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MostrarMensagemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MostrarMensagemComponent,
    ReactiveFormsModule,
  ]
})
export class ShareModule { }
