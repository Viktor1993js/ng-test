import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @Input() opacity: string = '1';

  @Input() active: boolean = false;

  @Input() bgColor: any;

  constructor() { }

  @HostBinding('style.backgroundColor') get getOpasity() {
    return this.opacity;
  }

  @HostBinding('style.background-color') get getBackgroundColor() {
    return this.bgColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'rgba(75, 75, 75, 0.795)';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'transparent';
  }

}
