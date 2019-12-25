import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';

import { AlertMessage, NgAlertService } from './ng-alert.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-alert',
  templateUrl: './ng-alert.component.html',
  styleUrls: ['./ng-alert.component.css'],
})
export class NgAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgAlertService) {}

  ngOnInit(): void {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
