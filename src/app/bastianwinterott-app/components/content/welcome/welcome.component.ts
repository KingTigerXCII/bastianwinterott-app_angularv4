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
      headline: 'Welcome',
      text: 
      `
        Hi and welcome to my website. My name is Bastian, I'm 24 and I work as a software developer in 
        Nuremberg, Germany. Software developing isn't only my job, it also influences my private life. 
        Therefore I'm very interested in new technologies and how they work. As programming is one of 
        my passions, this website is meant to keep you updated about my private side projects.
        Thank you for visiting my website. I hope you like it.
      `
    }

    this.articles.push(article);

  }

  ngOnInit() {
  }

}
