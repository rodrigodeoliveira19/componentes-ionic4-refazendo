import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompBadgePageRoutingModule } from './comp-badge-routing.module';

import { CompBadgePage } from './comp-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompBadgePageRoutingModule
  ],
  declarations: [CompBadgePage]
})
export class CompBadgePageModule {}
