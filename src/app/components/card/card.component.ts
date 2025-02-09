import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() content: any;
  @Input() orientation?: 'v' | 'h' = 'v';
  
  ngOnInit() {
    console.log(this.content);
  }
}
