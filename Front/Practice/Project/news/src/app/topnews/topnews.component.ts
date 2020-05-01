import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topnews} from './topnews.model';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {
  topnews:Topnews[]=[];
  featurednews:Topnews[]=[];
  httpCLient:HttpClient;

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    this._httpClient.get("http://api.mohamed-sadek.com/news/topnews").subscribe(
      response => {
        this.topnews = response as Topnews[];

      },
      error => {}
    );
    this._httpClient.get("http://api.mohamed-sadek.com/news/featurednews").subscribe(
      response => {
        this.featurednews = response as Topnews[];
      },
      error => {}
    );
  }

}
