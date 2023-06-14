import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-warehouse-view',
  styleUrls: ['./view.component.scss'],
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnDestroy, OnInit {


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('oninit');
  }

}
