import { Component } from "@angular/core";

import { ApiService } from "./shared";
import { URLS } from "./app.routing";

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  urls = URLS;
  
  constructor(private api: ApiService) {
    // Do something with api
  }
}
