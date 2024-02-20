import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroDetailsComponent } from './Components/hero-details/hero-details.component';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [HeroesComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
    ]
})
export class HeroesModule { }
