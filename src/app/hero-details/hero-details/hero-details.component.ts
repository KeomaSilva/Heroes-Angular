import { Component, Input, input } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent {
  @Input() hero?:Hero;

}
