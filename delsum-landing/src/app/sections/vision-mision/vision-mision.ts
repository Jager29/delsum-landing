import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-vision-mision',
  standalone: true,
  imports: [FieldsetModule],
  templateUrl: './vision-mision.html',
  styleUrls: ['./vision-mision.css'],
  animations: [
    trigger('slideInLeft', [
      state('hidden',  style({ opacity: 0, transform: 'translateX(-50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('400ms ease-in'))
    ]),
    trigger('slideInRight', [
      state('hidden',  style({ opacity: 0, transform: 'translateX(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('400ms ease-in'))
    ])
  ]
})
export class VisionMision implements OnInit {
  visionState:  'hidden' | 'visible' = 'hidden';
  misionState:  'hidden' | 'visible' = 'hidden';
  isMobile = false;

  /** Deshabilita **todas** las animaciones en móvil */
  @HostBinding('@.disabled')
  get disableAnimations() {
    return this.isMobile;
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;

    if (!this.isMobile) {
      this.initIntersectionObserver();
    } else {
      // móvil: que siempre estén visibles
      this.visionState = 'visible';
      this.misionState = 'visible';
    }
  }

  private initIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isVis = entry.isIntersecting;
        if (entry.target === this.visionEl) {
          this.visionState = isVis ? 'visible' : 'hidden';
        }
        if (entry.target === this.misionEl) {
          this.misionState = isVis ? 'visible' : 'hidden';
        }
      });
    }, { threshold: 0.2 });

    if (this.visionEl) observer.observe(this.visionEl);
    if (this.misionEl) observer.observe(this.misionEl);
  }

  /** capturamos las referencias en getters para no usar document.query */
  get visionEl(): HTMLElement | null {
    return document.querySelector('.vision-wrapper');
  }
  get misionEl(): HTMLElement | null {
    return document.querySelector('.mision-wrapper');
  }
}
