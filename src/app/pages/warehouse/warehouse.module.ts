import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {NbCardModule, NbLayoutModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CVEComponent} from './cve/cve.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'view',
      component: ViewComponent,
    },
    {
      path: 'view/:uuid',
      component: CVEComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ViewComponent,
    CVEComponent,
  ],
})
export class WarehouseModule { }
