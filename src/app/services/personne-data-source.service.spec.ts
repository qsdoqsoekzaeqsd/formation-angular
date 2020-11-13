import { TestBed } from '@angular/core/testing';

import { PersonneDataSource } from './personne-data-source.service';

describe('PersonneDataSourceService', () => {
  let service: PersonneDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
