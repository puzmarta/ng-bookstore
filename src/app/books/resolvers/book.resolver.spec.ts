import { TestBed } from '@angular/core/testing';

import { bookResolver } from './book.resolver';
import { ResolveFn } from '@angular/router';

describe('BookListResolver', () => {
  const bookResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => bookResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(bookResolver).toBeTruthy();
  });
});
