import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../models/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(private http: HttpClient) { }

  listOcorrencias(): Observable<Ocorrencia[]> {
    const url = "/api/ocorrencias";

    return this.http.get<Ocorrencia[]>(url);
  }
}
