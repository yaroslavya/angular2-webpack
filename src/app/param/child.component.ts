import { ActivatedRoute, UrlSegment, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'child',
  template: ``,  
})
export class ChildComponent {

  private _segments: UrlSegment[] = [];

  constructor(route: ActivatedRoute) {     
    route.url.forEach( (segments: UrlSegment[]) =>{    
        this._segments = segments;
    });                
  }
}