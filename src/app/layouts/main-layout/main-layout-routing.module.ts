import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/main-page').then(m => m.MainPageModule),
      },
      {
        path: 'watch-list',
        loadChildren: () => import('../../pages/watch-list').then(m => m.WatchListModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../pages/login-page').then(m => m.LoginPageModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('../../pages/registration-page').then(m => m.RegistrationPageModule)
      },
    ],
    component: MainLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {
}
