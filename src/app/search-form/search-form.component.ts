import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { News, SearchService } from './search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {


  searchString = '';

  @Output() onLoad: EventEmitter<News[]> = new EventEmitter<News[]>()

  constructor( private searchService:SearchService ) { }

  search(){
    if(!this.searchString.trim()) return
    this.searchService.search(this.searchString)
      .subscribe((news)=>{
        this.onLoad.emit(news)
      })
  }

  fetchAll(){
    this.searchService.fetchAll()
      .subscribe((news)=>{
        this.onLoad.emit(news)
      })
  }

  ngOnInit(){
    this.fetchAll()
  }
}
