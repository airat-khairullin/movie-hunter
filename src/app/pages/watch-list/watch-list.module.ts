import {NgModule} from '@angular/core';

import {WatchListComponent} from './watch-list.component';
import {WatchListRoutingModule} from './watch-list-routing.module';

@NgModule({
  declarations: [WatchListComponent],
  imports: [WatchListRoutingModule],
})
export class WatchListModule {
}
