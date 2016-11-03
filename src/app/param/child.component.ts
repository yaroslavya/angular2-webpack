import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'child',
  template: `Im a child`,  
})
export class ChildComponent {

  private _segments: UrlSegment[] = [];

  constructor(route: ActivatedRoute) {     
    
  }
}