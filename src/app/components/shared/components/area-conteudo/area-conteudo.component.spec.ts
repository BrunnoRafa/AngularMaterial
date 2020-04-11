import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConteudoComponent } from './area-conteudo.component';

describe('AreaConteudoComponent', () => {
  let component: AreaConteudoComponent;
  let fixture: ComponentFixture<AreaConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
