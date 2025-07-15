// src/app/sections/hero/hero.ts
import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  animations: [
    trigger('inViewport', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'none' })),
      transition('hidden => visible', [
        animate('600ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('heroSection', { static: true }) section!: ElementRef<HTMLElement>;
  @HostBinding('@inViewport') state: 'hidden' | 'visible' = 'hidden';

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        this.state = entry.isIntersecting ? 'visible' : 'hidden';
      }
    }, { threshold: 0.25 });
    this.observer.observe(this.section.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
