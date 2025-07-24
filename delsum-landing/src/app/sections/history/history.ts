import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface HistoryItem {
  year: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrls: ['./history.css'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('400ms ease-in'))
    ])
  ]
})
export class HistoryComponent implements OnInit {
  items: HistoryItem[] = [
    { year: '1990', text: 'Comenzamos en Lung Fung como un pequeño taller familiar, perfeccionando nuestras recetas de shaomai y hakao.', image: 'assets/images/delisum/his1.jpg' },
    { year: '2000', text: 'Incorporamos métodos de congelado rápido para preservar la frescura y el sabor en cada bocado.', image: 'assets/images/delisum/his2.jpg' },
    { year: '2010', text: 'Expandimos nuestra producción y abrimos nuestra primera fábrica con maquinaria de última generación.', image: 'assets/images/delisum/his3.jpg' },
    { year: '2018', text: 'Nos convertimos en la marca líder de dim sum congelado en toda la ciudad de Panamá.', image: 'assets/images/delisum/his5.jpg' },
    { year: '2025', text: 'Hoy seguimos innovando en sabor y calidad, llevando lo mejor del dim sum a tu mesa.', image: 'assets/images/delisum/his6.jpg' }
  ];

  states: ('hidden' | 'visible')[] = [];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.states = this.items.map(() => 'hidden');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // ---------- LÍNEA CORREGIDA ----------
        // LÍNEA CORREGIDA:
        const idx = Number((entry.target as HTMLElement).dataset['idx']!);

        this.states[idx] = entry.isIntersecting ? 'visible' : 'hidden';
      });
    }, { threshold: 0.25 });

    setTimeout(() => {
      this.el.nativeElement
        .querySelectorAll('.history-item')
        .forEach((el: HTMLElement) => observer.observe(el));
    });
  }

}
