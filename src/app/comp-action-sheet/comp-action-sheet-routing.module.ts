import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompActionSheetPage } from './comp-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: CompActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompActionSheetPageRoutingModule {}
