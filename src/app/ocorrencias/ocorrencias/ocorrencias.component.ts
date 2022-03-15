import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ocorrencia } from '../models/ocorrencia';
import { Regiao } from '../models/regiao';
import { Faixaetaria } from '../models/faixaetaria';

import { OcorrenciaService } from '../services/ocorrencia.service';
import { RegiaoService } from '../services/regiao.service';
import { FaixaEtariaService } from '../services/faixa-etaria.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit, OnDestroy {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  readonly subscriptions = new Subscription();

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaEtariaService
  ) { }

  ngOnInit(): void {
    this.listarRegioes();
    this.listarOcorrencias();
    this.listarFaixas();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private listarRegioes(): void {
    const subscription = this.regiaoService.listRegiao().subscribe((regioes) => {
      this.regioes = regioes;
    });

    this.subscriptions.add(subscription);
  }

  private listarOcorrencias(): void {
    const subscriptionOcorrencias = this.ocorrenciaService.listOcorrencias().subscribe((ocorrencias) => {
      this.ocorrencia_exame = ocorrencias
    });

    this.subscriptions.add(subscriptionOcorrencias);
  }

  private listarFaixas(): void {
    const subscriptionFaixas = this.faixaEtariaService.listFaixaEtaria().subscribe((
      faixa => { this.faixaetarias = faixa }
    ));

    this.subscriptions.add(subscriptionFaixas)
  }
}
