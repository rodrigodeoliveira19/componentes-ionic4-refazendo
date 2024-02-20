import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppTodoconahackPage } from './app-todoconahack.page';

const routes: Routes = [
  {
    path: '',
    component: AppTodoconahackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTodoconahackPageRoutingModule {}
