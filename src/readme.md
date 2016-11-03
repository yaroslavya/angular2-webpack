Angular2 routing
================

Step: s1e3-query-params
-------------

Currently we have 3 routes and 3 corresponding components:
**HomeComponent**, **AboutComponent** and **ParamComponent**
Lets check how urls are structured and understood by the router.
Lets check how one can access the query parameters and where are they visible from.

1. *route.queryParams* are accesible from everywhere(every component, no matter where in the routing hierarchy the component is)
2. *route.QueryParams* are of type *BehaviorSubject*, so to get the value you can simply *queryParams.getValue()*;
3. you can also use forEach to get the value, so any way is fine. 


