import { Directive, HostListener } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Directive({
  selector: '[cardAppearance]',
})
export class CardAppearanceDirective {
  constructor(private card: MatCard) {}

  @HostListener('mouseover') onMouseOver() {
    this.card.appearance = 'raised';
  }

  @HostListener('mouseout') onMouseOut() {
    this.card.appearance = 'outlined';
  }
}
