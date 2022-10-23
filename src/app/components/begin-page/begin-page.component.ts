import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AboutComponent } from '../about/about.component';


const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class BeginPageComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }



}
