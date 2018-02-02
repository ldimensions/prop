import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { commonMenu } from '../../../shared/models/menu/common.menu';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'common-layout-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  
  constructor(private http:Http){ }

  private commonMenus: Array<any> = commonMenu;

  ngOnInit() {
    //console.log(environment.API_URL);
    //console.log(this.commonMenus);
  }

}
