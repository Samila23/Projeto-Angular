import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProfessoresModel } from './professores.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<ProfessoresModel[]>(`${environment.api_url}/professores`);
  }

  save(professorObj: ProfessoresModel){
    return this.httpClient.post<ProfessoresModel>(`${environment.api_url}/professores`, professorObj);
  }

  delete(id : number){
    //return this.httpClient.delete('http://localhost:8080/professores/' + id);
    return this.httpClient.delete(`${environment.api_url}/professores/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get<ProfessoresModel>(`${environment.api_url}/professores/${id}`);
  }

  update(id: number, professorObj: ProfessoresModel){
    return this.httpClient.patch<ProfessoresModel>(`${environment.api_url}/professores/${id}`, professorObj);
  }
}
