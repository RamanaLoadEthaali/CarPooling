import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseHover]',
  standalone: false
})
export class MouseHoverDirective {
  @Input('appMouseHover') tablerow !: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement,'cursor','pointer')
  }
  @HostListener('mouseenter') onMouseEnter(){
    // this.tablerow = this.el.nativeElement.innerHTML
    // this.el.nativeElement.innerHTML = this.tablerow;
    // this.renderer.setStyle(this.el.nativeElement, 'color','blue')
    this.highlight(this.tablerow)
  }
  // @HostListener('click') onClick(){
  //   this.highlight('green')
  // }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
  }
  highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
