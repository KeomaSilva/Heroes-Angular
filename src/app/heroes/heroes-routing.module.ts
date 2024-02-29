import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './Components/hero-details/hero-details.component';
import { HeroesComponent } from './Components/heroes/heroes.component';

const routes: Routes = [
  {path: '', component:HeroesComponent},
  {path: ':id', component:HeroDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
