import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'ngx-warehouse-cve',
  styleUrls: ['./cve.component.scss'],
  templateUrl: './cve.component.html',
})
export class CVEComponent implements OnInit {
  constructor(
  ) {}



  ngOnInit(): void {
    console.log("On init");
    // console.log(this.route);
  }

}
