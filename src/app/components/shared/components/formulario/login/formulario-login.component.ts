import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-form-login',
    templateUrl: './formulario-login.component.html',
    styleUrls: ['./formulario-login.component.scss']
})
export class FormularioLoginComponent {
    
    @Output() emitLogin: EventEmitter<boolean> = new EventEmitter<boolean>(); 

    onSubmit(): void {
        this.emitLogin.emit(true);
    }
}