import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainLayoutRoutingModule} from './main-layout-routing.module';
import {HeaderModule} from '../../components/header';
import {FooterModule} from '../../components/footer';

import {MainLayoutComponent} from './main-layout.component';

@NgModule({
    declarations: [MainLayoutComponent],
    imports: [
        CommonModule,
        MainLayoutRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class MainLayoutModule {
}
