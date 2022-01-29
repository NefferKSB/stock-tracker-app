import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isScrolled = false;
  menuOffset: number;

  constructor(
    private viewportScroller: ViewportScroller
  ) {
    this.menuOffset = 115;
  }

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 116 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  public scrollToElementId(elementId: string): void {
    this.viewportScroller.setOffset([0, 70]);
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
