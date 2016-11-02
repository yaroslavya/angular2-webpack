import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'child',
  template: ``,  
})
export class ChildComponent {

  private _segments: UrlSegment[] = [];

  constructor(route: ActivatedRoute) {     
    route.url.forEach( (segments: UrlSegment[]) =>{
        console.info("child segment: ", segments);
        this._segments = segments;
    });
  }
}