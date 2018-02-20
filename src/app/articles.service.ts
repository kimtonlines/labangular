import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from './article';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArticlesService {

  private _url: string = 'http://localhost:1337/article';

  constructor(private htpp: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.htpp.get<IArticle[]>(this._url);
  }
 
}
