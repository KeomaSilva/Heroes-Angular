import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <mat-card>
    <mat-card-title>
      404 - page not found
    </mat-card-title>
    <mat-card-content>
      This page do not exist!
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary" routerLink="/">
        take me Home
      </button>
    </mat-card-actions>
  </mat-card>
  `,
  styles:[
  `
  :host{
    text-align: center;
  }
  `],
})
export class PageNotFoundComponent {

}
