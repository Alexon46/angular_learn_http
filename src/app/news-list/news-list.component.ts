import { Component } from '@angular/core';

@Component({
  selector: 'app-news-list',
  template: `<div class="news-cards row"><ng-content></ng-content></div>`
})
export class NewsListComponent {}
