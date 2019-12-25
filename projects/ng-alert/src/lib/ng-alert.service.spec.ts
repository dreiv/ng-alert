import { TestScheduler } from 'rxjs/testing';

import { NgAlertService } from './ng-alert.service';

describe('NgAlertService', () => {
  let sut: NgAlertService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    sut = new NgAlertService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a success message', () => {
    const message = 'Success - the operation went by accordingly.';
    const expectedMessage = { prefix: 'Success', message, color: 'green' };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'Danger - you are about to commit a breaking change.';
    const expectedMessage = { prefix: 'Danger', message, color: 'red' };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe('a', { a: expectedMessage });
  });

  it('should stream a warning message', () => {
    const message = 'Warning - this operation will affect your balance.';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange' };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe('a', { a: expectedMessage });
  });

  it('should stream a info message', () => {
    const message = 'Info - the weather will clear up later.';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue' };

    sut.createSuccessAlert(message);
    scheduler
      .expectObservable(sut.alertMessage$)
      .toBe('a', { a: expectedMessage });
  });
});
