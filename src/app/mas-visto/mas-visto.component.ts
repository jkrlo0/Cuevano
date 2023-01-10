import { Component } from '@angular/core';

@Component({
  selector: 'app-mas-visto',
  templateUrl: './mas-visto.component.html',
  styleUrls: ['./mas-visto.component.css']
})
export class MasVistoComponent {

}

var imgs = new Array();

imgs[0].src = '../../assets/img2.jpeg'

var imgActual = function(){
  imgActual = imgs[0];
}