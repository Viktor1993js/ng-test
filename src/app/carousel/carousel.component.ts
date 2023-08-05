import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {


  slides = [
    { img: "assets/photo/Rectangle 6.png" },
    { img: "assets/photo/Rectangle 6.png" },
  ];

  counter: number = 1;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,

  };

  plus() {
    this.counter++;
    if (this.counter > this.slides.length) {
      this.counter = 1;
    }
  }

  minus() {
    this.counter--;
    if (this.counter < 1) {
      this.counter = this.slides.length;
    }
  }
}
