import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileLayoutComponent} from './profile-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/profile-page').then(m => m.ProfilePageModule),
      }
    ],
    component: ProfileLayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileLayoutRoutingModule {
}
