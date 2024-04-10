import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  heroes: Hero[]=[];
  constructor(private heroService: HeroService){  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void{
  this.heroService.getAll().subscribe(heroes =>
  this.heroes = heroes.slice(1,4));
  }



}
