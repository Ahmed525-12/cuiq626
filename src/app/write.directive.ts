import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appWrite]'
})
export class WriteDirective {

  constructor(private _al:ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._al.nativeElement.value;

    this._al.nativeElement.value = initalValue.replace(/[^a-z]*/g, '');
    if ( initalValue !== this._al.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
