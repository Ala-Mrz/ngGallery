import { Image } from './../models/image';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.css']
})
export class GalleryComponent implements OnInit{
selectedImage: Image;
ngOnInit(){}
selectImage(image: Image){
    this.selectedImage = image;
}
}
