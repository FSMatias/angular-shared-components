import { NgModule } from '@angular/core';
import { NavComponentComponent } from './nav-component.component';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavComponentComponent,
    SideNavListComponent,
    HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    NavComponentComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ]
})
export class NavComponentModule { }
