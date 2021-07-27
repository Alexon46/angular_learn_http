import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface News {
  events?: any
  featured: boolean
  id: number
  imageUrl: string
  launches?: any
  newsSite: string
  publishedAt: string
  summary: string
  title: string,
  updatedAt: string
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(string: string):Observable<News[]>{
    return this.http.get<News[]>(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${string}`)
  }

  fetchAll():Observable<News[]>{
    return this.http.get<News[]>(`https://api.spaceflightnewsapi.net/v3/articles`)
  }
}
