import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

export interface Review {
  text: string;
  name: string;
  position?: string;
  avatar?: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class Reviews {
  // Datos de ejemplo; tú los reemplazas por los reales
  reviews: Review[] = [
    {
      text: '“Los dim sums de Delisum son increíbles: su textura, sabor y frescura me conquistaron.”',
      name: 'María López',
      position: 'Food Blogger',
      //avatar: 'assets/images/delisum/reviewer1.jpg'
    },
    {
      text: '“Siempre que los pido para eventos, mis invitados me preguntan dónde los consigo. 100% recomendados.”',
      name: 'Joaquín Reyes',
      position: 'Organizador de eventos',
      //avatar: 'assets/images/delisum/reviewer2.jpg'
    },
    {
      text: '“Calidad, sabor y consistencia. Mi familia y yo no nos cansamos de pedirlos cada semana.”',
      name: 'Ana Torres',
      position: 'Cliente fiel',
      //avatar: 'assets/images/delisum/reviewer3.jpg'
    }
  ];
}
