import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective implements OnChanges {
    @Input('appHighlight') rating: number = 0;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges() {
        if (this.rating >= 4.5) {
            this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff9c4'); // Light yellow
            this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #fbc02d');
            this.renderer.setAttribute(this.el.nativeElement, 'title', 'Popular Choice!');
        }
    }
}
