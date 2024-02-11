import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompAlertPageRoutingModule } from './comp-alert-routing.module';

import { CompAlertPage } from './comp-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompAlertPageRoutingModule
  ],
  declarations: [CompAlertPage]
})
export class CompAlertPageModule {}
