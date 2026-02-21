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
      title: 'Example Client Website',
      description: 'A modern business website built for a local company looking to establish their online presence. Features responsive design, contact integration, and optimised performance.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
    },
    {
      title: 'Another Project',
      description: 'A web application with custom functionality built to streamline business operations. Includes user dashboards and data management.',
      tags: ['Web App', 'Node.js', 'Database', 'API'],
    },
  ];
}
