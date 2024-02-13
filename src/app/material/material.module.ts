import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


const MODULES= [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports:[MODULES],
  exports:[MODULES]
})
export class MaterialModule { }
