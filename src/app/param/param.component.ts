import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var vis:any; 

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {

  private _segments: UrlSegment[] = [];

  constructor(route: ActivatedRoute) {     
    route.url.forEach( (segments: UrlSegment[]) =>{
        console.info("segment: ", segments);
        this._segments = segments;
    });
  }

  ngOnInit() {    
    this.showHierarchy( this._segments );
  }

  private showHierarchy(segments: UrlSegment[]): void {    
    let nodeArr = [];
    let edgeArr = [];
    let index = 1;
    segments.forEach( (segment:UrlSegment) => {
      nodeArr.push({id:index, label:segment.path, group:0, isSegment:true});
      let parentSegmentId = index;
      index++;      
      for(var key in segment.parameters) {
        nodeArr.push({id:index++, label:`${key}=${segment.parameters[key]}`, group:1, parentId:parentSegmentId});
      }
    });    

    let nodes = new vis.DataSet([...nodeArr]);    
    
    let filtered = nodeArr.filter(x => x.isSegment);

    let params = nodeArr.filter(x => !x.isSegment)

    // create an array with edges
    for(let i=0; i<filtered.length; i++){
      if(i+1 < filtered.length){
        edgeArr.push({from: filtered[i].id, to:filtered[i+1].id});        
      }
    }

    for(let i=0; i<params.length; i++){
      edgeArr.push({from: params[i].id, to:params[i].parentId});
    }

    let edges = new vis.DataSet([...edgeArr]);    

    // create a network
    let container = document.getElementById('segments');
    let data = {
      nodes: nodes,
      edges: edges
    };

    let options = {};
    let network = new vis.Network(container, data, options);
  }

}