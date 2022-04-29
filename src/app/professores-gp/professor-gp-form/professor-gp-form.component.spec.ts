import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorGpFormComponent } from './professor-gp-form.component';

describe('ProfessorGpFormComponent', () => {
  let component: ProfessorGpFormComponent;
  let fixture: ComponentFixture<ProfessorGpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorGpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorGpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
