import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delsum-landing');
}
