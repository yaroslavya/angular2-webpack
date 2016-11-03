import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ParamComponent} from "./param/param.component";
import {ChildComponent} from "./param/child.component";
import {SpecificComponent} from "./param/specific.component";
import {NotFoundComponent} from "./param/not-found.component";

let urls = {
  empty: "", 
  about: "about",
  param: "param-is/:parent",
  child: "i-am-child"
};

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "page-not-found", component: NotFoundComponent },
  { path: urls.about, component: AboutComponent },
  { path: "param-is/specific-route", component: SpecificComponent},
  { path: urls.param, component: ParamComponent,
    children:[
      { path: "", component: ChildComponent },
      { path: urls.child, component: ChildComponent }
    ]
  },
  { path: "**", redirectTo: "/page-not-found" }    
];

export const routing = RouterModule.forRoot(routes);
export const URLS = urls;
