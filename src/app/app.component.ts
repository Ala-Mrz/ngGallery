import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ImageComponent } from './gallery/image-list/image/image.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng';
}
