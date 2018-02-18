import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
