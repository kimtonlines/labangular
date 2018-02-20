import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  public articles = [];

  constructor(private _articlesService: ArticlesService) { }

  ngOnInit() {
    this._articlesService.getArticles()
        .subscribe(data => this.articles = data );
  }

}
