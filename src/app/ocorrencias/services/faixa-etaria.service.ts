import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Faixaetaria } from '../models/faixaetaria';

@Injectable({
  providedIn: 'root'
})
export class FaixaEtariaService {

  constructor(private http: HttpClient) { }

  listFaixaEtaria(): Observable<Faixaetaria[]> {
    const url = '/api/faixaetaria';

    return this.http.get<Faixaetaria[]>(url);
  }
}
