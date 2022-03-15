import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regiao } from '../models/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(private http: HttpClient) { }

  listRegiao(): Observable<Regiao[]> {
    const url = "/api/regioes";

    return this.http.get<Regiao[]>(url);
  }
}
