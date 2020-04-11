import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { 
        useHash: true,
        // enableTracing: true 
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
