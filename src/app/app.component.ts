import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SanityService } from './services/sanity.service';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ContentActions } from './store/content.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, NavbarComponent, ContentComponent, FooterComponent, SidebarComponent]
})
export class AppComponent {
  content$: Observable<any>

  constructor(
    private sanity: SanityService,
    private store: Store<{ content: number }>) {
    this.content$ = store.select('content');
  }

  ngOnInit() {
    this.sanity.fetchData().then((data) => {
      console.log('Data: ');
      console.log(data);
    });
  }

  setContent(data: any) {
    this.store.dispatch(ContentActions.retrieve(data));
  }
}

