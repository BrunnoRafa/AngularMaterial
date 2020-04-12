import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { ControleEstoqueComponent } from './controle-estoque/controle-estoque.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ControleEstoqueComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
