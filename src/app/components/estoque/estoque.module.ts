import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { ControleEstoqueComponent } from './controle-estoque/controle-estoque.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ControleEstoqueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EstoqueRoutingModule,

    MatTableModule,
    MatPaginatorModule
  ]
})
export class EstoqueModule { }
