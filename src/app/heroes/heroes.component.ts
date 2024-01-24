import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectHero?: Hero;

  constructor(private heroService: HeroService){

  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroes = this. heroService.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectHero = hero;
  }

}
