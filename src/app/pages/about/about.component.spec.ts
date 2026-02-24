import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the intro text', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.intro')?.textContent).toContain('software engineer');
  });

  it('should display technology tags', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const tags = compiled.querySelectorAll('.tag');
    expect(tags.length).toBeGreaterThan(0);
  });

});
