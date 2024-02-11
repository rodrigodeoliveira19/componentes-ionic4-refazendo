import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompAlertPage } from './comp-alert.page';

const routes: Routes = [
  {
    path: '',
    component: CompAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompAlertPageRoutingModule {}
