import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites built from scratch, tailored to your brand and business goals. Responsive, fast, and optimised for all devices.',
      features: ['Responsive design', 'Modern frameworks', 'SEO-friendly', 'Performance optimised'],
    },
    {
      title: 'Web Applications',
      description: 'Full featured web applications for businesses that need more than a static site. From dashboards to customer portals.',
      features: ['Custom functionality', 'User authentication', 'Database integration', 'API development'],
    },
    {
      title: 'Software Solutions',
      description: 'Tailor made software to solve specific business problems. Automation, tooling, and integrations that save time and improve workflows.',
      features: ['Process automation', 'Third party integrations', 'Custom tooling', 'Ongoing support'],
    },
  ];
}
