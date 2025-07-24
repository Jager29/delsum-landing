import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Bts } from '../../sections/bts/bts';
import { Products } from '../../sections/products/products';
import { Hero } from '../../sections/hero/hero';
import { VisionMision } from '../../sections/vision-mision/vision-mision';
import { Team } from '../../sections/team/team';
import { Reviews } from '../../sections/reviews/reviews';
import { Contact } from '../../sections/contact/contact';
import { History } from '../../sections/history/history';

@Component({
  selector: 'app-layout',
 imports: [
    Header,
    Footer,
    // tus secciones:
    Hero,
    Products,
    Bts,
    VisionMision,
    Team,
    Reviews,
    Contact,
    History
  ],
  standalone: true,
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
