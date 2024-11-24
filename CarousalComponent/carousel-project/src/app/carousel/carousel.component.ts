import { Component, Input } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() images: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  selectedImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  };

  onNextClick(): void {
    if(this.selectedIndex === this.images.length-1){
      this.selectedIndex = 0;
    } else{
      this.selectedIndex++;
    }
  }
}
