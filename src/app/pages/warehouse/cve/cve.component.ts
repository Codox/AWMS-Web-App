import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { upperFirst } from 'lodash';
import {Warehouse} from '../../../interfaces/warehouse.interface';
import {WarehouseService} from '../../../services/warehouse.service';

@Component({
  selector: 'ngx-warehouse-cve',
  styleUrls: ['./cve.component.scss'],
  templateUrl: './cve.component.html',
})
export class CVEComponent implements OnInit {
  mode: string;
  utils = {
    upperFirst,
  };

  warehouse: Warehouse;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly warehouseService: WarehouseService,
  ) {}

  async ngOnInit(): Promise<void> {
    const uuid = this.route.snapshot.params['uuid'];
    this.mode = this.route.snapshot.queryParamMap.get('mode');

    this.warehouse = await this.warehouseService.getWarehouse(uuid);
  }
}
