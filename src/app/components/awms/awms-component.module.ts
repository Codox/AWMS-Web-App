import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AWMSFormCountryDropdownComponent} from './awms-form-country-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbCardModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {AWMSFormInputComponent} from './awms-form-input.component';
import {AWMSYesNoDialogueComponent} from './awms-yes-no-dialogue.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
  ],
  declarations: [
    AWMSFormCountryDropdownComponent,
    AWMSFormInputComponent,
    AWMSYesNoDialogueComponent,
  ],
  exports: [
    AWMSFormCountryDropdownComponent,
    AWMSFormInputComponent,
    AWMSYesNoDialogueComponent,
  ],
})
export class AWMSComponentModule {}
