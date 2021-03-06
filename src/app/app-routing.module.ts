import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', component : MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component : ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
