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
  @Input('appAutoGrowInput') inputHeight: string = '10px';
  @HostBinding('style.height') height!: string;

  constructor(private input: ElementRef) {}

  ngOnInit() {
    this.height = this.inputHeight;
  }

  @HostListener('input') resizeTextArea() {
    this.input.nativeElement.style.height = 'auto';
    this.input.nativeElement.style.height = `${this.input.nativeElement.scrollHeight}px`;
  }
}
