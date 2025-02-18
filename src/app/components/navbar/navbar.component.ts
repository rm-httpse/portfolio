import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navOptions: any;

  ngOnInit() {
    this.navOptions = {
      tabs: [
        { title: 'CV', link: '#' },
        { title: 'About me', link: '/about' },
        { title: 'Projects', link: '/projects' }
      ],
    }
  }
}
