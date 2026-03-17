import { TestBed } from '@angular/core/testing';
import { UnderConstructionComponent } from './under-construction.component';

describe('UnderConstructionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.name')?.textContent).toContain('David Byrne');
  });

  it('should display the coming soon message', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.message')?.textContent).toContain('Site coming soon');
  });

  it('should have an email link', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('.contact a') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.href).toContain('mailto:david@davidbyrnesoftware.ie');
  });
});
