import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mas-visto',
  templateUrl: './mas-visto.component.html',
  styleUrls: ['./mas-visto.component.css']
})
export class MasVistoComponent implements OnInit {
  ngOnInit() {
    if (this.i == 8) {
      this.i = 0;
    };
    this.imgactual = this.imgarray[this.i];
  }

  imgactual!: String;
  i: number = 0;
  imgarray = [
    "../../assets/img1.jpeg",
    "../../assets/img2.jpeg",
    "../../assets/img3.jpeg",
    "../../assets/img4.jpeg",
    "../../assets/img5.jpeg",
    "../../assets/img6.jpeg",
    "../../assets/img7.jpeg",
    "../../assets/img8.jpeg"
  ];

  previousimg() {
    this.i--;
    this.ngOnInit();
    console.log(this.i);
  };

  nextimg() {
    this.i++;
    this.ngOnInit();
    console.log(this.i);
  };
}