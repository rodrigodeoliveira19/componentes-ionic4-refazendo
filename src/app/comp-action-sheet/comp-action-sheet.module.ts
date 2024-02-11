import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompActionSheetPageRoutingModule } from './comp-action-sheet-routing.module';

import { CompActionSheetPage } from './comp-action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompActionSheetPageRoutingModule
  ],
  declarations: [CompActionSheetPage]
})
export class CompActionSheetPageModule {}
