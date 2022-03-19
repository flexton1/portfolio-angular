import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
   

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
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
