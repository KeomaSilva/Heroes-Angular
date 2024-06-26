import { Component, Input, OnInit, input } from '@angular/core';
import { HeroService } from '../../../core/services/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit{

  hero!:Hero;

  constructor(
    private heroService:HeroService,
    private location:Location,
    private route:ActivatedRoute
    ){}

    ngOnInit(): void {
      this.getHero();
    }
    getHero():void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService.getOne(id).subscribe((hero)=>(this.hero = hero));
    }
    goBack():void{
      this.location.back();
    }
    isFormValid():boolean{
      return !!this.hero.name.trim();
    }
    save():void{
      this.heroService.update(this.hero).subscribe(()=>this.goBack());
    }

}
