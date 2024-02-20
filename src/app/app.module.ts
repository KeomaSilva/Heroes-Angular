import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailsComponent,
    HeroesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
