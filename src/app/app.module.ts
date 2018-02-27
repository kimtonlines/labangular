import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ArticlesService } from './articles.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsArticleComponent } from './details-article/details-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    DetailsArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
