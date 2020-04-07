import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { KontaktContComponent } from './kontakt-cont/kontakt-cont.component';
import { GalleryContComponent } from './gallery-cont/gallery-cont.component';
import { AboutUsContComponent } from './about-us-cont/about-us-cont.component';

const routes: Routes = [
  {path: 'home', component: LayoutComponent},
{path: '', component: LayoutComponent},
{path: 'gallery', component: GalleryContComponent},
{path: 'kontakt', component: KontaktContComponent},
{path: 'contact', component: ContactComponent},
{path: 'ueber-uns', component: AboutUsContComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
