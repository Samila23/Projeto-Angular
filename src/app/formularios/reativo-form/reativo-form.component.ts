import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reativo-form',
  templateUrl: './reativo-form.component.html',
  styleUrls: ['./reativo-form.component.scss']
})
export class ReativoFormComponent implements OnInit {
  //Inicializando a variavel meuForm com um objeto com controles vazios -> {}
  meuForm: FormGroup = new FormGroup({});
  // formBuilder: serviço que vai ajudar a criar os fomularios
  // serviço utilizado para ajudar a criar os controles( mecanismos de ajustes, saber o que tem na variavel) do formulário.
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email ]],
      password: [null, [Validators.required]]
    })
    console.log(this.meuForm);
  }

}
