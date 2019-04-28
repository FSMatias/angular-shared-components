import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'nav-nav-component',
  templateUrl: './nav-component.component.html',
  styles: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {

  @Input() leftSideNavHeader: NavItem;  // Not required
  @Input() rightSideNavHeaders: Array<NavItem>;

  navListItems: Array<NavItem> = new Array<NavItem>();

  constructor() { }

  ngOnInit() {
    this.navListItems = [...this.rightSideNavHeaders];
    if (this.leftSideNavHeader) {
      this.navListItems.splice(0, 0, this.leftSideNavHeader);
    }
  }

}
