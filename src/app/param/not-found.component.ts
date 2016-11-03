import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'do-we-need-this',
  template: `the page you were looking for was not found`,  
})
export class NotFoundComponent {  

  constructor(route: ActivatedRoute) {  
    console.info("AAA the requested url is: ", route.url.getValue());   
    console.info("Not found component");
  }
}