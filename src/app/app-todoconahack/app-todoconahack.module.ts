import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppTodoconahackPageRoutingModule } from './app-todoconahack-routing.module';

import { AppTodoconahackPage } from './app-todoconahack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppTodoconahackPageRoutingModule
  ],
  declarations: [AppTodoconahackPage]
})
export class AppTodoconahackPageModule {}
