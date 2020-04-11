import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControleEstoqueComponent } from './controle-estoque/controle-estoque.component';


const routes: Routes = [
  {
    path: 'controle-estoque',
    component: ControleEstoqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
