import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ParamComponent} from "./param/param.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "param/with/multiple/segments", component: ParamComponent }
];

export const routing = RouterModule.forRoot(routes);
