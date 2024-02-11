import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompBadgePage } from './comp-badge.page';

const routes: Routes = [
  {
    path: '',
    component: CompBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompBadgePageRoutingModule {}
