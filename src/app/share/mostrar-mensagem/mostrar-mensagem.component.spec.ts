import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMensagemComponent } from './mostrar-mensagem.component';

describe('MostrarMensagemComponent', () => {
  let component: MostrarMensagemComponent;
  let fixture: ComponentFixture<MostrarMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
