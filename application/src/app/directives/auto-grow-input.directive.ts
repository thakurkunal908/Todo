import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appAutoGrowInput]',
})
export class AutoGrowInputDirective implements OnInit {
  @HostBinding('style.height') height!: string;

  constructor(private input: ElementRef) {}

  ngOnInit() {
    this.height = `${this.input.nativeElement.scrollHeight}px`;
  }

  @HostListener('input') resizeTextArea() {
    this.input.nativeElement.style.height = 'auto';
    this.input.nativeElement.style.height = `${this.input.nativeElement.scrollHeight}px`;
  }
}
