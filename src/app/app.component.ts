import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { siteConfig } from './site-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, UnderConstructionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  spotlightX = 0;
  spotlightY = 0;
  underConstruction = siteConfig.underConstruction;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.spotlightX = event.clientX;
    this.spotlightY = event.clientY;
  }
}
