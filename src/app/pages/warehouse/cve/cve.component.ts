import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { upperFirst } from 'lodash';
import {Warehouse} from '../../../interfaces/warehouse.interface';
import {WarehouseService} from '../../../services/warehouse.service';
import {CountryService} from '../../../services/country.service';
import {Country} from '../../../interfaces/country.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CVEMode} from '../../../shared/cve-mode';

@Component({
  selector: 'ngx-warehouse-cve',
  styleUrls: ['./cve.component.scss'],
  templateUrl: './cve.component.html',
})
export class CVEComponent implements OnInit {
  companyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    country: new FormControl('', [Validators.required]),
  });

  mode: CVEMode;
  utils = {
    upperFirst,
  };

  warehouse: Warehouse;
  countries: Country[];

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly warehouseService: WarehouseService,
    private readonly countryService: CountryService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.mode = this.route.snapshot.queryParamMap.get('mode') as CVEMode;

    this.countries = await this.countryService.getCountries();

    switch (this.mode) {
      case 'create':
        break;
      case 'edit':
        break;
      case 'view':
          const uuid = this.route.snapshot.params['uuid'];
          this.warehouse = await this.warehouseService.getWarehouse(uuid);

          this.companyForm.patchValue({
            name: this.warehouse.name,
            country: this.warehouse.country,
          });
        break;
    }
  }
}
