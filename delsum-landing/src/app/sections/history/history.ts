import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrls: ['./history.css'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})
export class History implements OnInit {
  // Los 7 pasos de tu historia
  items = [
    {
      text: 'Nuestra aventura comenzó en los tradicionales salones de Lung Fung, donde recetas centenarias de dim sum pasaron de generación en generación.',
      image: 'assets/images/delisum/his1.jpg'
    },
    {
      text: 'Las manos expertas de nuestra familia perfeccionaron cada siu mai y hakao, convirtiéndolos en sinónimo de auténtica cocina cantonesa.',
      image: 'assets/images/delisum/his2.jpg'
    },
    {
      text: 'Pronto, nuestros dim sum se convirtieron en un orgullo local, deleitando paladares exigentes con su frescura y sabor.',
      image: 'assets/images/delisum/his3.jpg'
    },
    {
      text: 'Sentimos el deseo de compartir esa tradición en cada hogar, más allá de las puertas del restaurante.',
      image: 'assets/images/delisum/his4.jpg'
    },
    {
      text: 'Así nació Delisum: la versión congelada de nuestros dim sum artesanales para que disfrutes en casa sin perder calidad.',
      image: 'assets/images/delisum/his5.jpg'
    },
    {
      text: 'Incorporamos técnicas de congelado rápido que aseguran una textura y frescura inigualables en cada bocado.',
      image: 'assets/images/delisum/his6.jpg'
    },
    {
      text: 'Hoy, Delisum mantiene vivo el legado de Lung Fung, llevando la esencia de nuestra cocina cantonesa directamente a tu mesa.',
      image: 'assets/images/delisum/his7.jpg'
    }
  ];

  // Control de estados para la animación
  states: ('hidden'|'visible')[] = [];

  constructor(private host: ElementRef) {}

  ngOnInit() {
    // Todos ocultos al inicio
    this.states = this.items.map(() => 'hidden');

    // IntersectionObserver para disparar fadeIn al entrar en pantalla
    setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const idx = Number((entry.target as HTMLElement).dataset['idx']);
              this.states[idx] = 'visible';
            }
          });
        },
        { threshold: 0.3 }
      );

      const els: NodeListOf<HTMLElement> =
        this.host.nativeElement.querySelectorAll('.history-item');
      els.forEach((el, i) => {
        el.dataset['idx'] = i.toString();
        observer.observe(el);
      });
    });
  }
}
