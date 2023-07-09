import {AWMSFormComponent} from './awms-form.component';
import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-awms-form-input',
  template: `
    <div *ngIf="type === 'editable'" class="form-group" [formGroup]="formOptions">
      <label [htmlFor]="objectName" class="label">{{ humanName }}</label>

      <input type="text" nbInput fullWidth [id]="objectName" [placeholder]="humanName"
             status="{{ isFormValidationIssues(formOptions, objectName) ? 'danger' : 'basic' }}"
             [formControlName]="objectName">
      <small class="text-danger" *ngIf="isFormValidationIssues(formOptions, objectName)">
        {{ formatErrorsIntoSingleMessage(formOptions.controls[objectName].errors) }}
      </small>
    </div>

    <div *ngIf="type === 'viewonly'" class="form-group">
      <label [htmlFor]="objectName" class="label">{{ humanName }}</label>

      <input type="text" nbInput fullWidth [id]="objectName" [placeholder]="humanName" [value]="value ? value : ' '" [disabled]="true">
    </div>
  `,
})
export class AWMSFormInputComponent extends AWMSFormComponent {
  @Input() formOptions: FormGroup;
  @Input() type: 'editable' | 'viewonly' = 'editable';
  @Input() humanName?: string;
  @Input() objectName?: string;
  @Input() value?: string;
}
