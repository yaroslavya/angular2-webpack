import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'specific',
  template: `Im a specific component`,  
})
export class SpecificComponent {  

  constructor(route: ActivatedRoute) {     
    console.info("Specific component");
  }
}