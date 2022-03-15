import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';

import { OcorrenciaService } from './services/ocorrencia.service';
import { RegiaoService } from './services/regiao.service';
import { FaixaEtariaService } from './services/faixa-etaria.service';


@NgModule({
  declarations: [
    OcorrenciasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatToolbarModule,
    OcorrenciasRoutingModule
  ],
  providers: [
    OcorrenciaService,
    RegiaoService,
    FaixaEtariaService
  ]
})
export class OcorrenciasModule { }
