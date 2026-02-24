import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.name')?.textContent).toContain('David Byrne');
  });

  it('should display the title', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Software Engineer');
  });

  it('should display the tagline', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.tagline')?.textContent).toContain('Building modern websites');
  });

  it('should have four nav links', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(4);
  });

  it('should have correct nav labels', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const labels = Array.from(compiled.querySelectorAll('.nav-label')).map(el => el.textContent?.trim());
    expect(labels).toEqual(['About', 'Services', 'Portfolio', 'Contact']);
  });

  it('should have social links', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = compiled.querySelectorAll('.social-links a');
    expect(socialLinks.length).toBe(3);
  });

  it('should display the photo', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const photo = compiled.querySelector('.photo') as HTMLImageElement;
    expect(photo).toBeTruthy();
    expect(photo.alt).toBe('David Byrne');
  });

  it('should start with mobile menu closed', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    expect(component.mobileMenuOpen).toBeFalse();
  });

  it('should toggle mobile menu', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBeTrue();
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBeFalse();
  });

  it('should close mobile menu', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.componentInstance;
    component.mobileMenuOpen = true;
    component.closeMobileMenu();
    expect(component.mobileMenuOpen).toBeFalse();
  });
});
