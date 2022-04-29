import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-professor-gp-form',
  templateUrl: './professor-gp-form.component.html',
  styleUrls: ['./professor-gp-form.component.scss']
})
export class ProfessorGpFormComponent implements OnInit {
    // 1-) alocar a variável que vai ter os controles do form
    meuForm : FormGroup = new FormGroup({});
      // para saber se é edição
      isEdicao : boolean = false;

      // id de quem estou alterando
      id : number = -1;
    // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
    constructor(
      private formBuilder: FormBuilder,
      private professoresGpService: ProfessoresGpService,
      private router:Router,
      private activatedRoute : ActivatedRoute
      ) { }
  // 3-) alocar os controles na variável meuForm através do formBuilder
  ngOnInit(): void {
    this.meuForm = this.formBuilder.group({
      nome : [ null, [ Validators.required ] ],
      email : [ null, [ Validators.required , Validators.email ] ]
    });

    // pegar parâmetros das rotas

    this.activatedRoute.params
      .subscribe(
        (parametros: any) => {
          console.log(parametros);

          // é EDIÇÃO
          if (parametros.id){
            console.log(`edição id ${parametros.id}`);

            this.isEdicao = true;
            this.id = parametros.id;

            // PRECISO consultar a API para buscar todas as informações do ID a ser editado

            this.professoresGpService.getOne(parametros.id)
              .subscribe(
                (dadosProfessoresGp) => {
                  console.log(dadosProfessoresGp);
                  // patchValue atualiza os campos do formulário de acordo com o nome dos controles
                  this.meuForm.patchValue(dadosProfessoresGp);
                }
              );
          }
          // é CRIAÇÃO
          else {
            console.log(`criação`);
            this.isEdicao = false;
          }
        }
      );
  }
  // 4-) integrar os controles do form no HTML
  onSubmit(){
    //console.log(this.meuForm.value);
    // edicao igual a false significa que é criação
    if (this.isEdicao == false){
      this.professoresGpService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          // o navigate é para redirecionar para uma outra rota de interesse
          this.router.navigate(['/professoresGp']);
        }
      );
    }
    //é alteração de algum registro
    else{
      this.professoresGpService.update(this.id, this.meuForm.value)
        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de interesse
            this.router.navigate(['/professoresGp']);
          }
        );
    }

  }

}
