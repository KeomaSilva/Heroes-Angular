import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './Components/hero-details/hero-details.component';
import { HeroesComponent } from './Components/heroes/heroes.component';

const routes: Routes = [
  {path: 'heroes/:id', component:HeroDetailsComponent},
  {path: 'heroes', component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
