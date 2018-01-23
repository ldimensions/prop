import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
//import { AppConfig } from '../../../shared/config/app-config';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'common-layout-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  
  constructor(private http:Http){ }

  ngOnInit() {
    console.log(environment.API_URL);
  }

}
