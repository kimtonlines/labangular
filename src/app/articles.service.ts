import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {

  constructor() { }

  getArticles() {

    return [
      {"id": 1, "libelle": "Coca Cola", "pu": 300},
      {"id": 2, "libelle": "Fanta", "pu": 300},
      {"id": 3, "libelle": "Youki", "pu": 200},
      {"id": 4, "libelle": "Planet", "pu": 200},
      {"id": 5, "libelle": "Orangina", "pu": 500},
    ];
  }

}
