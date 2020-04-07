import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { LayoutComponent } from './layout/layout.component';
import { AsideRightComponent } from './aside-right/aside-right.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { KontaktContComponent } from './kontakt-cont/kontakt-cont.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryContComponent } from './gallery-cont/gallery-cont.component';
import { AboutUsContComponent } from './about-us-cont/about-us-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    AsideComponent,
    LayoutComponent,
    AsideRightComponent,
    ContactFormComponent,
    FooterComponent,
    KontaktContComponent,
    WelcomeComponent,
    GalleryContComponent,
    AboutUsContComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
