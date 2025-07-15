import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.html',
  styleUrls: ['./team.css'],
  animations: [
    trigger('slideInLeft', [
      state('hidden',  style({ opacity: 0, transform: 'translateX(-50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ]),
    trigger('slideInRight', [
      state('hidden',  style({ opacity: 0, transform: 'translateX(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ]),
    trigger('fadeIn', [
      state('hidden',  style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('800ms 200ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]
})
export class Team implements AfterViewInit, OnDestroy {
  @ViewChild('teamSection', { static: true }) section!: ElementRef<HTMLElement>;
  sectionVisible = false;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          this.sectionVisible = entry.isIntersecting;
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.section.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
