import { TestBed, inject } from '@angular/core/testing';

import { NewQuestionService } from './new-question.service';

describe('NewQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewQuestionService]
    });
  });

  it('should be created', inject([NewQuestionService], (service: NewQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
