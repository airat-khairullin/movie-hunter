import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {SidebarNavComponent} from './sidebar-nav.component';


@NgModule({
  declarations: [
    SidebarNavComponent
  ],
  exports: [
    SidebarNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SidebarNavModule {
}
