import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var vis:any; 

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {  

  constructor(route: ActivatedRoute) {     
    
  }

  ngOnInit() {    
    
  }  

}