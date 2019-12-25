import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgAlertService } from 'projects/ng-alert/src/public-api';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const ngAlertServiceStub = {
      createSuccessAlert: (): void => null,
      createDangerAlert: (): void => null,
      createWarningAlert: (): void => null,
      createInfoAlert: (): void => null,
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [{ provide: NgAlertService, useValue: ngAlertServiceStub }],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('createSuccessMessage', () => {
    it('makes expected calls', () => {
      const ngAlertServiceStub: NgAlertService = fixture.debugElement.injector.get(
        NgAlertService,
      );
      spyOn(ngAlertServiceStub, 'createSuccessAlert').and.callThrough();
      component.createSuccessMessage();
      expect(ngAlertServiceStub.createSuccessAlert).toHaveBeenCalled();
    });
  });

  describe('createDangerMessage', () => {
    it('makes expected calls', () => {
      const ngAlertServiceStub: NgAlertService = fixture.debugElement.injector.get(
        NgAlertService,
      );
      spyOn(ngAlertServiceStub, 'createDangerAlert').and.callThrough();
      component.createDangerMessage();
      expect(ngAlertServiceStub.createDangerAlert).toHaveBeenCalled();
    });
  });

  describe('createWarningMessage', () => {
    it('makes expected calls', () => {
      const ngAlertServiceStub: NgAlertService = fixture.debugElement.injector.get(
        NgAlertService,
      );
      spyOn(ngAlertServiceStub, 'createWarningAlert').and.callThrough();
      component.createWarningMessage();
      expect(ngAlertServiceStub.createWarningAlert).toHaveBeenCalled();
    });
  });

  describe('createInfoMessage', () => {
    it('makes expected calls', () => {
      const ngAlertServiceStub: NgAlertService = fixture.debugElement.injector.get(
        NgAlertService,
      );
      spyOn(ngAlertServiceStub, 'createInfoAlert').and.callThrough();
      component.createInfoMessage();
      expect(ngAlertServiceStub.createInfoAlert).toHaveBeenCalled();
    });
  });
});
