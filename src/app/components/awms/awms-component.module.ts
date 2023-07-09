import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AWMSFormCountryDropdownComponent} from './awms-form-country-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbInputModule, NbSelectModule} from '@nebular/theme';
import {AWMSFormInputComponent} from './awms-form-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
    AWMSFormCountryDropdownComponent,
    AWMSFormInputComponent,
  ],
  exports: [
    AWMSFormCountryDropdownComponent,
    AWMSFormInputComponent,
  ],
})
export class AWMSComponentModule {}
