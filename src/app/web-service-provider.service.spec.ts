import { TestBed } from '@angular/core/testing';

import { WebServiceProviderService } from './web-service-provider.service';

describe('WebServiceProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServiceProviderService = TestBed.get(WebServiceProviderService);
    expect(service).toBeTruthy();
  });
});
