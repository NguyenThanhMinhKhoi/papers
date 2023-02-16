import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
// import { NewsService } from './services/news.service';
import { News } from 'src/models/new.model';
import { Observable } from 'rxjs';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from './services/auth.service';
import { Auth } from '@angular/fire/auth';
// import { NewsService } from './services/news.service';
// import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  
  title = 'angular-blogpaper';
  news$: Observable<News> = this.newsService.get();
 
  constructor(private newsService:NewsService,public auth:Auth,private autherService:AuthService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInIt(){
     onAuthStateChanged(this.auth ,(user)=>{
      if(user){
          this.autherService.currentUser=user;
      }
      else{
        console.log('No user')
        this.autherService.currentUser =null;
      }
     })

  }
 
}
