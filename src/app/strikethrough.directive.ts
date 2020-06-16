import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private elem: ElementRef) { }

  // tslint:disable-next-line: quotemark
  @HostListener("click") onClicks() {
    // tslint:disable-next-line: quotemark && semicolon
    this.textDeco("line-through")
  }

  // tslint:disable-next-line: quotemark
  @HostListener("dblclick") onDoubleClicks() {
    // tslint:disable-next-line: quotemark && semicolon
    this.textDeco("None")
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;

  }
}
