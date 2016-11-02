import {Routes, RouterModule} from '@angular/router';

import {ParamComponent} from './param/param.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'param/test/me', component: ParamComponent}  
];

export const routing = RouterModule.forRoot(routes);
