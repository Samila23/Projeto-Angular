import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfessoresGpComponent } from './listar-professores-gp.component';

describe('ListarProfessoresGpComponent', () => {
  let component: ListarProfessoresGpComponent;
  let fixture: ComponentFixture<ListarProfessoresGpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProfessoresGpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProfessoresGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
