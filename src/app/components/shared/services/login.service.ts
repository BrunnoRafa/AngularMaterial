import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoginService {
    logado: boolean;

    constructor() { }
 
    login(): boolean {
        return this.logado = true;
    }
}