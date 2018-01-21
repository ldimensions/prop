import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";


@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }

}
