Angular2 routing
================

Step: s1e7-url-matching-misc
-------------

We maybe missed some things about routes matching.
How to set the route by default?
What are the different matching strategies?

prefix vs full matching strategies difference
lets check it on a more complex examples to see the ng2 router bug.

`{ path: "abou", redirectTo: "/home", pathMatch: "prefix" },`

we can remove the topmost component and have a componentless route
that might be needed to avoid a host component which task is to host
the children components only.

```
{ 
  path: urls.param, component: ParamComponent,
    children:[
      { path: "", component: ChildComponent },
      { path: urls.child, component: ChildComponent }
    ]
}   
```
so the config with componentless route is below:

```
{ 
  path: urls.param,
    children:[
      { path: "", component: ParamComponent },
      { path: urls.child, component: ChildComponent }
    ]
}
```   


