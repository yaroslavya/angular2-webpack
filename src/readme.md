Angular2 routing
================

Step: s1e4-url-matching
-------------

Currently we have 3 routes and 3 corresponding components:
**HomeComponent**, **AboutComponent** and **ParamComponent**
Lets check how urls are matched by the router.
1. The exact url is matched if its specified by the route.
2. if you specify a parameter, then you should start with a colon symbol ":", like :anything
3. whatever you put in the place of a placeholder will match, except for the empty string
4. routes are interpreted in the order of appearance, specificity doesnt matter.



