// src/app/sections/vision-mision/vision-mision.ts
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
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
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('600ms ease-in'))
    ]),
    trigger('slideInRight', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('600ms ease-in'))
    ])
  ]
})
export class VisionMision implements AfterViewInit, OnDestroy {
  visionState: 'hidden' | 'visible' = 'hidden';
  misionState: 'hidden' | 'visible' = 'hidden';
  private observer!: IntersectionObserver;

  @ViewChild('visionWrapper', { read: ElementRef }) visionEl!: ElementRef;
  @ViewChild('misionWrapper', { read: ElementRef }) misionEl!: ElementRef;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === this.visionEl.nativeElement) {
            this.visionState = e.isIntersecting ? 'visible' : 'hidden';
          }
          if (e.target === this.misionEl.nativeElement) {
            this.misionState = e.isIntersecting ? 'visible' : 'hidden';
          }
        });
      },
      { threshold: 0.2 }
    );
    this.observer.observe(this.visionEl.nativeElement);
    this.observer.observe(this.misionEl.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
