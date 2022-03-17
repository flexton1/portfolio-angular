import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginPageComponent } from './components/begin-page/begin-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

const routes: Routes = [
  {path: 'home', component: BeginPageComponent},

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
