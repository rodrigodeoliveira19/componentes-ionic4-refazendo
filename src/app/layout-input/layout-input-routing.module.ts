import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutInputPage } from './layout-input.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutInputPageRoutingModule {}
