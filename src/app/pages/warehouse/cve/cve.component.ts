import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { upperFirst } from 'lodash';

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

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}



  ngOnInit(): void {
    this.mode = this.route.snapshot.queryParamMap.get('mode');
  }
}
