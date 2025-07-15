import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import {
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

interface BtsImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: 'app-bts',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './bts.html',
  styleUrls: ['./bts.css'],
    animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('500ms 200ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class Bts {
  images: BtsImage[] = [
    { itemImageSrc: '/assets/images/delisum/bts1.jpg', thumbnailImageSrc: '/assets/images/delisum/bts1.jpg', title: 'Manos expertas' },
    { itemImageSrc: '/assets/images/delisum/bts2.jpg', thumbnailImageSrc: '/assets/images/delisum/bts2.jpg', title: 'Preparación minuciosa' },
    { itemImageSrc: '/assets/images/delisum/bts3.jpg', thumbnailImageSrc: '/assets/images/delisum/bts3.jpg', title: 'Ingredientes frescos' },
    { itemImageSrc: '/assets/images/delisum/bts4.jpg', thumbnailImageSrc: '/assets/images/delisum/bts4.jpg', title: 'Cada pieza única' },
    { itemImageSrc: '/assets/images/delisum/bts5.jpg', thumbnailImageSrc: '/assets/images/delisum/bts5.jpg', title: 'Detalle y cuidado' },
    // añade más si lo deseas...
  ];

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px',  numVisible: 2, numScroll: 1 },
    { breakpoint: '560px',  numVisible: 1, numScroll: 1 }
  ];
}
