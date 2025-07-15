import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-products',
  imports: [CarouselModule],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

 products = [
    { name: 'Siu Mai 3',  image: '/assets/images/delisum/siumai3.jpg' },
    { name: 'Hakao 3',    image: '/assets/images/delisum/hakao3.jpg' },
    { name: 'Siu Mai 2',  image: '/assets/images/delisum/siumai2.jpg' },
    { name: 'Hakao 2',    image: '/assets/images/delisum/hakao2.jpg' },
    { name: 'Siu Mai 1',  image: '/assets/images/delisum/siumai.jpg'  },
    { name: 'Hakao 1',    image: '/assets/images/delisum/hakao.jpg'  },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
