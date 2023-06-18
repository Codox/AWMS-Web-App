import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NbWindowService} from '@nebular/theme';
import {NavigationExtras, Router} from '@angular/router';
import {ServerDataSource} from 'ng2-smart-table';
import {getFilterableTableSettings} from '../../../../shared/filterable-table-settings';

@Component({
  selector: 'ngx-warehouse-view',
  styleUrls: ['./view.component.scss'],
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnDestroy, OnInit {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly windowService: NbWindowService,
    private readonly router: Router,
  ) {}

  settings = {
    actions: {
      columnTitle: '',
      position: 'right',
      width: '5%',
      custom: [
        {
          name: 'view',
          title: '<img src="assets/icons/outline/eye-outline.svg" width="20" height="20" >',
        },
      ],
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      contactTelephone: {
        title: 'Contact Telephone',
        type: 'string',
      },
      addressLines: {
        title: 'Address Lines',
        type: 'array',
        valuePrepareFunction: (addressLines: string[]) => {
          return addressLines.join(', ');
        },
      },
      town: {
        title: 'Town',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      region: {
        title: 'Region',
        type: 'string',
      },
      zipCode: {
        title: 'Zip Code',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
        width: '10%',
      },
    },
  };

  source: ServerDataSource = new ServerDataSource(
    this.httpClient,
    getFilterableTableSettings('warehouse'),
  );

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
   //  console.log('oninit');
  }

  async onCustom(event: any) {
    console.log(`event`, event);
    if (event.action === 'view') {
      const extraData = {
        key1: 'value1',
        key2: 'value2',
      };

      const navigationExtras: NavigationExtras = {
        state: extraData,
      };

      await this.router.navigate(['/pages/warehouse/view/', event.data.uuid], navigationExtras);
    }
  }
}
