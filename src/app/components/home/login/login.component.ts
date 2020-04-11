import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  classeAreaLogin = ['areaLogin'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(event: Event): void {
    this.router.navigate(['controle-estoque']);
  }
}
