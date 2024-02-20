import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { MessageService } from '../../../core/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  displayedColumns: string[] = ['id','name'];

  constructor(
    private heroService: HeroService)
    {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>
      this.heroes = heroes);
  }

}
