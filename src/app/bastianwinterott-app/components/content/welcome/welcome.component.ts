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
      createdDate: new Date('February 4, 2016 10:13:00'),
      headline: 'The First',
      text:
        `
          Hi and welcome to my website. If you want more information about me and my work, you will find 
          the 'Aboutme' and 'projects' section in the menu. I love to share my code too, you will find some
          code exambles on my github page. 
        `
    };

    this.articles.push(article);

  }

  ngOnInit() {
  }

}
