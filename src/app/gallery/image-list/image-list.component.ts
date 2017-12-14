import { Component , OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from '../../models/image';
import{ImageService}from'../../services/image.service';
@Component({
    selector: 'image-list',
    templateUrl: 'image-list.component.html',
    styleUrls: ['image-list.component.css']
})
export class ImageListComponent implements OnInit{
  @Output() selectedEvent: EventEmitter<Image>=new EventEmitter<Image>();  
constructor(private imageService: ImageService){}
images: Image[]=[];
selectedImage: Image;
ngOnInit(){
    this.images =this.imageService.getImages()
}
onSelect(image: Image){
   this.selectedEvent.emit(image)
}
}

