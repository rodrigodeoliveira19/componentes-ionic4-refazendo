import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'instalacao',
    loadChildren: () => import('./instalacao/instalacao.module').then( m => m.InstalacaoPageModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'layout-header-footer',
    loadChildren: () => import('./layout-header-footer/layout-header-footer.module').then( m => m.LayoutHeaderFooterPageModule)
  },
  {
    path: 'layout-tabs',
    loadChildren: () => import('./layout-tabs/layout-tabs.module').then( m => m.LayoutTabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  },
  {
    path: 'layout-input',
    loadChildren: () => import('./layout-input/layout-input.module').then( m => m.LayoutInputPageModule)
  },
  {
    path: 'comp-action-sheet',
    loadChildren: () => import('./comp-action-sheet/comp-action-sheet.module').then( m => m.CompActionSheetPageModule)
  },
  {
    path: 'comp-alert',
    loadChildren: () => import('./comp-alert/comp-alert.module').then( m => m.CompAlertPageModule)
  },
  {
    path: 'comp-badge',
    loadChildren: () => import('./comp-badge/comp-badge.module').then( m => m.CompBadgePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'app-todoconahack',
    loadChildren: () => import('./app-todoconahack/app-todoconahack.module').then( m => m.AppTodoconahackPageModule)
  },
  {
    path: 'api-externa',
    loadChildren: () => import('./api-externa/api-externa.module').then( m => m.ApiExternaPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
