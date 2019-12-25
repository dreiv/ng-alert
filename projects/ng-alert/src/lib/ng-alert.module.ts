import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgAlertComponent } from './ng-alert.component';

@NgModule({
  declarations: [NgAlertComponent],
  imports: [CommonModule],
  exports: [NgAlertComponent],
})
export class NgAlertModule {}
