import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViacepResult } from '../_models/ViaCepResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl

  constructor(private Http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.Http.get<ViacepResult>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) => {
        return response
      })
    )


  }

}
