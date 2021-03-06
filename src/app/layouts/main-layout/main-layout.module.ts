import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MainLayoutRoutingModule} from './main-layout-routing.module';
import {HeaderModule} from '../../components/header';
import {FooterModule} from '../../components/footer';

import {MainLayoutComponent} from './main-layout.component';
import {SidebarNavModule} from "@app/components/sidebar-nav";

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    HeaderModule,
    FooterModule,
    MatSidenavModule,
    SidebarNavModule
  ]
})
export class MainLayoutModule {
}
