import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AreaConteudoComponent } from '../shared/components/area-conteudo/area-conteudo.component';
import { ModalGridComponent } from './components/modal-grid/modal-grid.component';
import { LoginService } from './services/login.service';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [
        AreaConteudoComponent,
        ModalGridComponent,
        ModalFormComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,

        AreaConteudoComponent,
        ModalGridComponent,
        ModalFormComponent
    ],
    providers: [
        LoginService
    ]
  })
  export class SharedModule { }
  