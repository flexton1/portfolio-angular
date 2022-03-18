import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    BeginPageComponent,
    ContactPageComponent,
    AboutComponent,
    SkillsComponent,
    CurriculumComponent,
    PortfolioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
