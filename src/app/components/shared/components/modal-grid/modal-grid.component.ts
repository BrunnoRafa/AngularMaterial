import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-modal-grid',
    templateUrl: 'modal-grid.component.html',
    styleUrls: ['modal-grid.component.scss']
})
export class ModalGridComponent implements OnInit {
    tiles: Tile[] = [
        {text: 'cols 1', cols: 1, rows: 1 ,border: '1px double purple'},
        {text: 'cols 2', cols: 2, rows: 1 ,border: '1px double red'},
        {text: 'cols 3', cols: 3, rows: 1 ,border: '1px double skyblue'},
        {text: 'cols 4', cols: 4, rows: 1 ,border: '1px double yellow'},
        {text: 'cols 5', cols: 5, rows: 1 ,border: '1px double black'},
        {text: 'cols 6', cols: 6, rows: 1 ,border: '1px double blue'},
        {text: 'cols 7', cols: 7, rows: 1 ,border: '1px double purple'},
        {text: 'cols 8', cols: 8, rows: 1 ,border: '1px double red'},
        {text: 'cols 9', cols: 9, rows: 1 ,border: '1px double skyblue'},
        {text: 'cols 10', cols: 10, rows: 1 ,border: '1px double yellow'},
        {text: 'cols 11', cols: 11, rows: 1 ,border: '1px double black'},
        {text: 'cols 12', cols: 12, rows: 1 ,border: '1px double blue'},
    ];

    @Output() emiFecharModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    ngOnInit() {
        
    }

    fechar(): void {
        this.emiFecharModal.emit(true);
    }
}

export interface Tile {
    cols: number;
    rows: number;
    text: string;
    border: string;
}