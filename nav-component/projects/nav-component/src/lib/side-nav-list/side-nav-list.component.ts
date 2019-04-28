import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'nav-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Input() navListItems: Array<NavItem>;

  @Output() sidenavClose = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
