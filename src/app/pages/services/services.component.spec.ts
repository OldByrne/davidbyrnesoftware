import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have three services', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const component = fixture.componentInstance;
    expect(component.services.length).toBe(3);
  });

  it('should render all service cards', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.service-card');
    expect(cards.length).toBe(3);
  });

  it('should display service titles', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('.service-title');
    expect(titles[0]?.textContent).toContain('Web Design & Development');
    expect(titles[1]?.textContent).toContain('Web Applications');
    expect(titles[2]?.textContent).toContain('Software Solutions');
  });

  it('should display feature tags for each service', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstCard = compiled.querySelector('.service-card');
    const features = firstCard?.querySelectorAll('.service-features li');
    expect(features?.length).toBe(4);
  });
});
