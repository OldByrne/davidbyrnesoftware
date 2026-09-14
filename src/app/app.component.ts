import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { MobileMenuService } from './services/mobile-menu.service';
import { siteConfig } from './site-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, SocialLinksComponent, UnderConstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly menuService = inject(MobileMenuService);

  spotlightX = 0;
  spotlightY = 0;
  underConstruction = siteConfig.underConstruction;
  readonly menuOpen = this.menuService.isOpen;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.spotlightX = event.clientX;
    this.spotlightY = event.clientY;
  }
}
