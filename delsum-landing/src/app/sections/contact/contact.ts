// src/app/sections/contact/contact.ts
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class Contact {}
