import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carousel-project';

  images = [
    {
      imageSrc:
      'https://images.unsplash.com/photo-1700929626093-3aae1b6fdce0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      imageAlt: 'nature1'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1729481354989-51e675ddb3d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      imageAlt: 'nature2'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1702655358709-57cae9ec8c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      imageAlt: 'nature3'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1728985630341-075aa9277eda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      imageAlt: 'nature4'
    },
  ]
}
