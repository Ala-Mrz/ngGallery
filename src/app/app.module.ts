import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ImageService } from './services/image.service';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routes}from'./app.routes'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
