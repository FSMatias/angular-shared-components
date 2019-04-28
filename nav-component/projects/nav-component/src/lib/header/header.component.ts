import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() leftSideNavHeader: NavItem;
  @Input() rightSideNavHeaders: Array<NavItem>;

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
