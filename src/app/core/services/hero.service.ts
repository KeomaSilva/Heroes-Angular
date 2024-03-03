import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero.model';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  private log(message: string):void{
    this.messageService.add(`HeroService:${message}`)
  }

  constructor(private http:HttpClient, private messageService:MessageService){

  }
  getHeroes(): Observable <Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes)=> this.log(`fetch ${heroes.length} hero(es)`)));

  }
  getHero(id:number): Observable <Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero)=>this.log(`fetch hero id:${hero.id} - ${hero.name}`))
    );

  }
}
