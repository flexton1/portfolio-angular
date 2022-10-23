import { Component, OnInit } from '@angular/core';
import { aboutText1, aboutText2, listItems } from './about.consts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  listItems: any[] = listItems;
  aboutText1: string = aboutText1;
  aboutText2: string = aboutText2;

  constructor() { }

  ngOnInit(): void {
  }



}
