import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Coming soon',
      description: 'Project is the works and is coming soon...',
      tags: ['Next.js', 'TypeScript', 'SCSS', 'Responsive'],
    },
    {
      title: 'Also coming soon',
      description: 'Another project in the works that is also coming soon...',
      tags: ['Web App', 'Angular', 'Database', 'Spring boot'],
    },
  ];
}
