import { TestBed } from '@angular/core/testing';

import { AssociationAmenitiesService } from './association-amenities.service';

describe('AssociationAmenitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssociationAmenitiesService = TestBed.get(AssociationAmenitiesService);
    expect(service).toBeTruthy();
  });
});
