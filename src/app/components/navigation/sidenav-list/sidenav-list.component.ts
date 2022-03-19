import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: 'smooth'});
  }
  
  
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
  }
  
  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior: 'smooth'});
  }
  
  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior: 'smooth'});
  }
  
  toContact(){
    document.getElementById("home")?.scrollIntoView({behavior: 'smooth'});
  }

}
