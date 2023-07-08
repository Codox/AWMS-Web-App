import {FormComponent} from './form.component';
import {Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Country} from '../interfaces/country.interface';

export class AWMSFormCountryDropdownComponent extends FormComponent implements OnInit {
  @Input() formOptions: FormGroup;
  @Input() humanName?: string;
  @Input() objectName?: string;
  @Input() countries: Country[];
  @Input() dropdownType: 'countries' | 'telephone' = 'countries';

  ngOnInit(): void {
  }

}
