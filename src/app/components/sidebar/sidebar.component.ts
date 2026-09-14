import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { MobileMenuService } from '../../services/mobile-menu.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, SocialLinksComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private readonly menuService = inject(MobileMenuService);

  readonly menuOpen = this.menuService.isOpen;

  navItems = [
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Contact', route: '/contact' },
  ];

  toggleMobileMenu(): void {
    this.menuService.toggle();
  }

  closeMobileMenu(): void {
    this.menuService.close();
  }
}
