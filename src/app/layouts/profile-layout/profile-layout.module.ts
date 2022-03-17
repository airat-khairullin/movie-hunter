import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import {ProfileLayoutRoutingModule} from './profile-layout-routing.module';
import {HeaderModule} from '../../components/header';
import {FooterModule} from '../../components/footer';

import {ProfileLayoutComponent} from './profile-layout.component';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    ProfileLayoutRoutingModule,
    HeaderModule,
    FooterModule,
    MatSidenavModule
  ]
})
export class ProfileLayoutModule {
}
