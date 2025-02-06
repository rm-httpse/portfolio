import { Component } from '@angular/core';
import { UserInfo } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  user: UserInfo = {
    name: {
      link: '',
      text: 'Luis Petrella',
      icon: '',
    },
    description: {
      link: '',
      text: 'Full-stack web developer with 4+ years of expertise, learning both soft and hard skills throughout hard work with many kind of teams and clients. At my max power I can be very enthusiast, proactive, creative, charming and always full of energy to move forward and tackle any challenge.',
      icon: '',
    },
    location: {
      link: 'faCoffee',
      text: '📍 Barcelona, Spain',
      icon: '',
    },
    university: {
      link: '',
      text: ' 🎓 Universidad Rafael Urdaneta',
      icon: '',
    },
    email: {
      link: 'mailto:siulptt@gmail.com',
      text: '✉️ Email',
      icon: '',
    },
    github: {
      link: 'https://github.com/rm-httpse',
      text: '🐙 Github',
      icon: '',
    },
    malt: {
      link: 'https://en.malt.es/profile/luispetrella',
      text: '💼 Malt',
      icon: '',
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/luis-petrella-4788521a1/',
      text: '💼 LinkedIn',
      icon: '',
    }
  }
}
