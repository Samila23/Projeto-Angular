import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-professores-gp',
  templateUrl: './listar-professores-gp.component.html',
  styleUrls: ['./listar-professores-gp.component.scss']
})
export class ListarProfessoresGpComponent implements OnInit {
  professoresgp : any = [];
  constructor( private activatedRoute : ActivatedRoute,
               private professoresGpService : ProfessoresGpService,
    ) { }
  ngOnInit(): void {
    this.getAll();
    // this.professoresGpService.getAll()
    //   .subscribe(
    //     (data : any) => {
    //       console.log(data);
    //       this.professoresgp = data;
    //     }
    //   );
  //subscribe = é uma notificação , que recebeu uma nova notificação
  // assim que o subscribe for notificado de uma novo paramentro a arrayFunction irá pegar as informações
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
  onDelete( id : number){
    this.professoresGpService.delete(id)
    .subscribe(
      ()=>{
        console.log(`deletou este registro com id ${id}`);
        this.getAll();
      }
    )
  }

  private getAll(){
    this.professoresGpService.getAll()
    .subscribe(
      (data : any) => {
        console.log(data);
        this.professoresgp = data;
      }
    );
  }
}
