import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {NbCardModule, NbLayoutModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';

const routes: Routes = [{
  path: '',
  component: ViewComponent,
  children: [
    {
      path: 'view',
      component: ViewComponent,
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
  ],
})
export class WarehouseModule { }
