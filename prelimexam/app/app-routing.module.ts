import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'partners', component: PartnersComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path: 'nav', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
