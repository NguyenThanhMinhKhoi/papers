import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from 'src/models/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  get(){
    let url=" https://newsapi.org/v2/everything?q=tesla&from=2023-01-16&sortBy=publishedAt&apiKey=526b4b614e9a4647bb95a8e556734d27"
    return this.httpClient.get(url).pipe(map ((data:any)=>{
      return <News>data;
    }))
  }
}
