import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativoFormComponent } from './reativo-form.component';

describe('ReativoFormComponent', () => {
  let component: ReativoFormComponent;
  let fixture: ComponentFixture<ReativoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
