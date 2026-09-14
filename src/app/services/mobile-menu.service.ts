import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MobileMenuService {
  private readonly openState = signal(false);

  readonly isOpen = this.openState.asReadonly();

  toggle(): void {
    this.openState.update(open => !open);
  }

  close(): void {
    this.openState.set(false);
  }
}
