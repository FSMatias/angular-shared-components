import { NavItem } from './../../../nav-component/src/lib/nav-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nav-component-demo';

  leftSideNavHeader: NavItem; // not required field
  rightSideNavHeaders: Array<NavItem>;

  constructor() {
    this.leftSideNavHeader = {
      name: 'Home',
      icon: 'home',
      routerLink: '/home'
    };
    const about: NavItem = {
      name: 'About',
      icon: 'face',
      routerLink: '/about'
    };
    const favorite: NavItem = {
      name: 'Favorite',
      icon: 'favorite',
      routerLink: '/favorite'
    };

    this.rightSideNavHeaders = new Array<NavItem>();
    this.rightSideNavHeaders.push(about);
    this.rightSideNavHeaders.push(favorite);
  }
}
