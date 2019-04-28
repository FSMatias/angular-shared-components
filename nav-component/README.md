# Nav Component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

It contains a sharable navigation component using routing and a test project using the component.

This component uses angular material components and can be restyled if you use a differen material style theme.

## nav-component

The nav-component has a responsive behavior. 

Screens higher than 649px, the navigation will display all the headers:

//TODO: Add image

Screens smalled than 650px, the navigation will display a hamburger icon where the user can click on it and see the navigation options on a side navigation component.

//TODO: image

## nav-component-demo

This project shows how to use the nav-component which expects 2 inputs and the routers set on the project.

The leftSideNavHeader input is optional. The idea is to support a header to be displayed on the left side of the navigation while the rightSideNavHeaders will contain the list of headers displayed on the right side of the navigation bar.

The side navigation will display all headers, using the leftSideNavHeader, if exist, as the first option.


## Build the library

To build our nav-component Angular Library you should run:

```
ng build nav-component
```

Note that, since version 6.1, Angular CLI always builds libraries in production mode so we don’t use the --prod flag

## Build the demo application

```
ng build nav-component-demo --prod
```

## Serve the test app (cannot serve the library)

```
cd projects
ng serve nav-component-demo
```
