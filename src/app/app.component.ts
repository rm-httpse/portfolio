import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent, ContentComponent, FooterComponent, SidebarComponent]
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

