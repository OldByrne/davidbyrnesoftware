import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  navItems = [
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact', route: '/contact' },
  ];

  mobileMenuOpen = false;

  @ViewChild('mobileSocialBar') private mobileSocialBarRef?: ElementRef<HTMLElement>;

  private readonly updateViewportOffset = (): void => {
    const viewport = window.visualViewport;
    const bar = this.mobileSocialBarRef?.nativeElement;
    if (!viewport || !bar) {
      return;
    }
    const offsetFromLayoutBottom = window.innerHeight - (viewport.height + viewport.offsetTop);
    bar.style.transform = `translate3d(0, ${Math.max(offsetFromLayoutBottom, 0)}px, 0)`;
  };

  constructor(private readonly ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (!window.visualViewport) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      window.visualViewport!.addEventListener('resize', this.updateViewportOffset);
      window.visualViewport!.addEventListener('scroll', this.updateViewportOffset);
      this.updateViewportOffset();
    });
  }

  ngOnDestroy(): void {
    window.visualViewport?.removeEventListener('resize', this.updateViewportOffset);
    window.visualViewport?.removeEventListener('scroll', this.updateViewportOffset);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
