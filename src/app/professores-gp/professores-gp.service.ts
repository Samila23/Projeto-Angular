import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {
  //httpclient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://cursos.grandeporte.com.br:8080/professores');
  }
  save(professorGpObj: any){
    return this.httpClient.post('http://cursos.grandeporte.com.br:8080/professores', professorGpObj);
  }
  delete(id: number){
    return this.httpClient.delete(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }
  getOne(id: number){
    return this.httpClient.get(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }
  update(id: number, professorGpObj: any){
    return this.httpClient.patch(`http://cursos.grandeporte.com.br:8080/professores/${id}`, professorGpObj);
  }
}
