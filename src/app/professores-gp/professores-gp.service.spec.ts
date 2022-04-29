import { TestBed } from '@angular/core/testing';

import { ProfessoresGpService } from './professores-gp.service';

describe('ProfessoresGpService', () => {
  let service: ProfessoresGpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessoresGpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
