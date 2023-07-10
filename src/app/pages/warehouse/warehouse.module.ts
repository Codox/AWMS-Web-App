import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CVEComponent} from './cve/cve.component';
import { CommonModule } from '@angular/common';
import {AWMSComponentModule} from '../../components/awms/awms-component.module';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'view',
      component: ViewComponent,
    },
    {
      path: ':uuid',
      component: CVEComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbInputModule,
    AWMSComponentModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
  ],
  declarations: [
    ViewComponent,
    CVEComponent,
  ],
})
export class WarehouseModule { }
