import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ParamComponent} from "./param/param.component";
import {ChildComponent} from "./param/child.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "param/with/multiple/segments", component: ParamComponent,
    children:[
      { path: "", component: ChildComponent },
      { path: "and/other", component: ChildComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
