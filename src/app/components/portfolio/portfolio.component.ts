import { Component, OnInit } from '@angular/core';
import { cardTops } from './cards';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  cards = cardTops;

  constructor() { }

  ngOnInit(): void {
  }

}
