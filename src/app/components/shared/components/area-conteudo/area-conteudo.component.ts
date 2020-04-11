import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area-conteudo',
  templateUrl: './area-conteudo.component.html',
  styleUrls: ['./area-conteudo.component.scss']
})
export class AreaConteudoComponent implements OnInit {
  classes = ['areaConteudo'];

  @Input() classeAreaConteudo?: string[];

  ngOnInit(): void {
    if (this.classeAreaConteudo) {
      this.classes.push(...this.classeAreaConteudo);
    }
  }

}
