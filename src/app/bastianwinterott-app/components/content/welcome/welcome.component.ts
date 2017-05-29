import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  articles: Article[] = [];

  constructor() {

    let article: Article = {
      createdTime: new Date('February 4, 2016 10:13:00'),
      headline: 'first',
      text: 'bla bla'
    }

    this.articles.push(article);

  }

  ngOnInit() {
  }

}
