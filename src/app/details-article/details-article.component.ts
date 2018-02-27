import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  public article = {};

  constructor(private _articlesService: ArticlesService) { }

  ngOnInit() {
    this._articlesService.getArticleByID()
        .subscribe(data => this.article = data );
  }

}
