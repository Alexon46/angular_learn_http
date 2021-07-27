import { Component } from '@angular/core';
import { News } from './search-form/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  news:News[] = []

  constructor(){}

  newsLoaded(news:News[]){
    this.news = news
  }
}
