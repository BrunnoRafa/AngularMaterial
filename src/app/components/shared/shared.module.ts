import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { AreaConteudoComponent } from '../shared/components/area-conteudo/area-conteudo.component';
import { LoginService } from './services/login.service';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule
    ],
    declarations: [
        AreaConteudoComponent,
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        AreaConteudoComponent
    ],
    providers: [
        LoginService
    ]
  })
  export class SharedModule { }
  