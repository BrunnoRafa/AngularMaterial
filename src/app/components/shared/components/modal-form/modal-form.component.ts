import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

@Component({
    selector: 'app-modal-form',
    templateUrl: 'modal-form.component.html',
    styleUrls: ['modal-form.component.scss'],
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: { color: 'primary' },
    }]
})
export class ModalFormComponent implements OnInit {
    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];

    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    @Output() emiFecharModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    ngOnInit() {
        
    }

    fechar(): void {
        this.emiFecharModal.emit(true);
    }
}

interface Food {
    value: string;
    viewValue: string;
}