import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './article';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArticlesService {

  private _url: string = 'http://localhost:1337/article';
  private _urlid: string = 'http://localhost:1337/article/7';


  constructor(private htpp: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.htpp.get<IArticle[]>(this._url);
  }
 
  getArticleByID(): Observable<IArticle> {
    return this.htpp.get<IArticle>(this._urlid);
  }
}
