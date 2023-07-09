import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AWMSFormComponent} from './awms-form.component';
import {AWMSFormCountryDropdownComponent} from './awms-form-country-dropdown.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NbSelectModule} from "@nebular/theme";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbSelectModule,
  ],
  declarations: [
    AWMSFormCountryDropdownComponent,
  ],
})
export class AWMSComponentModule {}
