import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// window.addEventListener("wheel", (event) => {
//   if (event.deltaY > 0) {
//     goToSection(currentSection + 1);
//   } else {
//     
//   }
// });

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChildren('info') sections!: QueryList<ElementRef>;
  @ViewChild('main') main!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;
  
  isScrolling: boolean = false;
  curr = 0;

  ngAfterViewInit() {
    // Accedemos a los elementos y cambiamos el color de fondo
    console.log(this.sections)
    console.log(this.main)
  }

  goToSection(index: number) {
    if (index >= 0 && index < this.sections.length && !this.isScrolling) {
      this.isScrolling = true;
      this.curr = index;
      this.carousel.nativeElement.style.transform = `translateY(-${100 * index}%)`;
      
      setTimeout(() => { this.isScrolling = false; }, 1000); // Evita scrolls rápidos
    }
  }

  onScroll(e: WheelEvent) {
    if (e.deltaY > 0) {
      this.goToSection(this.curr + 1);
      console.log('parriba');
    } else {
      this.goToSection(this.curr - 1);
      console.log('pabajo');
    }
  }
}

