import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view/view.component';

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
  ],
  declarations: [
    ViewComponent,
  ],
})
export class WarehouseModule { }
