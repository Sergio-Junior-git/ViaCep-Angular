import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViaCepResults } from '../_models/ViacepResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl

  constructor(private Http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.Http.get<ViaCepResults>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map((response) => {
        return response
      })
    )


  }

}
