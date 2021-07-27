import { Component, Input, OnInit } from '@angular/core';
import { News } from '../search-form/search.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() news!:News;

  constructor() { }

  ngOnInit(): void {
    
  }

}
