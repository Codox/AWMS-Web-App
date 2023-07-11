import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {upperFirst} from 'lodash';
import {Warehouse} from '../../../interfaces/warehouse.interface';
import {WarehouseService} from '../../../services/warehouse.service';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../interfaces/country.interface';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {CVEMode} from '../../../shared/cve-mode';

@Component({
  selector: 'ngx-warehouse-cve',
  styleUrls: ['./cve.component.scss'],
  templateUrl: './cve.component.html',
})
export class CVEComponent implements OnInit {
  companyForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    uuid: new FormControl(''),
    contactTelephone: new FormControl('', Validators.required),
    addressLine1: new FormControl('', Validators.required),
    addressLine2: new FormControl('', Validators.required),
    addressLine3: new FormControl(''),
    town: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    country: new FormControl('', [Validators.required]),
  });

  mode: CVEMode;
  utils = {
    upperFirst,
  };

  loaded: boolean = false;

  warehouse: Warehouse;
  countries: Country[];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly warehouseService: WarehouseService,
    private readonly countryService: CountryService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.mode = this.route.snapshot.queryParamMap.get('mode') as CVEMode;

    this.countries = await this.countryService.getCountries();

    const uuid = this.route.snapshot.params['uuid'];

    switch (this.mode) {
      case 'create':
        break;
      case 'edit':
        await this.initForm(uuid);
        this.markControlsAsTouched(this.companyForm);
        this.loaded = true;
        break;
      case 'view':
        await this.initForm(uuid);
        this.loaded = true;
        break;
    }
  }

  async initForm(uuid: string): Promise<void> {
    this.warehouse = await this.warehouseService.getWarehouse(uuid);

    this.companyForm.patchValue({
      name: this.warehouse.name,
      uuid: this.warehouse.uuid,
      contactTelephone: this.warehouse.contactTelephone,
      addressLine1: this.warehouse.addressLines[0] ? this.warehouse.addressLines[0] : '',
      addressLine2: this.warehouse.addressLines[1] ? this.warehouse.addressLines[1] : '',
      addressLine3: this.warehouse.addressLines[2] ? this.warehouse.addressLines[2] : '',
      town: this.warehouse.town,
      city: this.warehouse.city,
      region: this.warehouse.region,
      zipCode: this.warehouse.zipCode,
      country: this.warehouse.country,
    });
  }

  switchToEditMode(): void {
    this.router.navigate(['/pages/warehouse/', this.warehouse.uuid], {
      queryParams: {
        mode: 'edit',
      },
    });
    this.mode = 'edit';
    this.markControlsAsTouched(this.companyForm);
  }

  async switchToViewMode(): Promise<void> {
    this.router.navigate(['/pages/warehouse/', this.warehouse.uuid], {
      queryParams: {
        mode: 'view',
      },
    });
    this.mode = 'view';
    await this.initForm(this.warehouse.uuid);
  }

  save(): void {

  }

  private markControlsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markControlsAsTouched(control);
      }
    });
  }

  getAddressLines(): FormArray {
    return this.companyForm.get('addressLines') as FormArray;
  }
}
