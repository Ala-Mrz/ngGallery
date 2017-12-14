import { Component, OnInit, Input } from '@angular/core';
import{ Image }from'../../../models/image';
@Component({
    selector: 'image',
    templateUrl: 'image.component.html',
    styleUrls: ['image.component.css']
})
export class ImageComponent {
@Input() image: Image;
constructor(){}

ngOnInit(){}
}
