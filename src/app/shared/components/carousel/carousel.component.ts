import { Component, Input, OnInit } from '@angular/core';
import { carouselAnimation } from '../../animations/carousel';
import { Image } from '../../models/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [carouselAnimation]
})
export class CarouselComponent implements OnInit {
  @Input() slides: Image[] = [];

  currentSlide = 0;
  interval?: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.onNextClick();
    }, 4000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.interval)
      clearInterval(this.interval);
  }
}
