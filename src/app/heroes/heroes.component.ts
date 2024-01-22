import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes = HEROES;
  selectHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectHero = hero;
  }

}
