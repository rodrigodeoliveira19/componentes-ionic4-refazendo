import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutInputPageRoutingModule } from './layout-input-routing.module';

import { LayoutInputPage } from './layout-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutInputPageRoutingModule
  ],
  declarations: [LayoutInputPage]
})
export class LayoutInputPageModule {}
