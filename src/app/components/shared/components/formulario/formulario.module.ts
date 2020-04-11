import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormularioLoginComponent } from './login/formulario-login.component';
import { SharedModule } from '../../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        SharedModule
    ],
    declarations: [
        FormularioLoginComponent
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormularioLoginComponent
    ]
  })
  export class FormularioModule { }
  