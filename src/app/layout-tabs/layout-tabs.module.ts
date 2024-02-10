import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutTabsPageRoutingModule } from './layout-tabs-routing.module';

import { LayoutTabsPage } from './layout-tabs.page';
import { Routes,RouterModule  } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutTabsPage,
  }, 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutTabsPageRoutingModule, 
  ],
  declarations: [LayoutTabsPage]
})
export class LayoutTabsPageModule {}
