import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService){

  }
getHeroes(): Observable <Hero[]>{
  const heroes = of(HEROES);
  this.messageService.add("HeroService: fetch heroes");
  return heroes;
}
getHero(id:number): Observable <Hero>{
  const Hero = HEROES.find(hero=>hero.id === id)!;
  this.messageService.add(`HeroService: fetch hero id:${id}`);
  return of(Hero);
}
}
