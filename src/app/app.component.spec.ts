import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialise spotlight coordinates at zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.spotlightX).toBe(0);
    expect(app.spotlightY).toBe(0);
  });

  it('should update spotlight coordinates on mouse move', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockEvent = new MouseEvent('mousemove', { clientX: 150, clientY: 250 });
    app.onMouseMove(mockEvent);
    expect(app.spotlightX).toBe(150);
    expect(app.spotlightY).toBe(250);
  });

  it('should render the sidebar when not under construction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.underConstruction = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-sidebar')).toBeTruthy();
  });

  it('should render the spotlight overlay when not under construction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.underConstruction = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.spotlight-overlay')).toBeTruthy();
  });

  it('should render the router outlet when not under construction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.underConstruction = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render under construction page when flag is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.underConstruction = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-under-construction')).toBeTruthy();
    expect(compiled.querySelector('app-sidebar')).toBeNull();
  });
});
