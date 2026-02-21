import { TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have projects defined', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    const component = fixture.componentInstance;
    expect(component.projects.length).toBeGreaterThan(0);
  });

  it('should render project cards', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(2);
  });

  it('should display project titles', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('.project-title');
    expect(titles.length).toBeGreaterThan(0);
  });

  it('should show image placeholders when no imageUrl is set', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const placeholders = compiled.querySelectorAll('.image-placeholder');
    expect(placeholders.length).toBe(2);
  });

  it('should display tech tags for projects', () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const tags = compiled.querySelectorAll('.tag');
    expect(tags.length).toBeGreaterThan(0);
  });
});
