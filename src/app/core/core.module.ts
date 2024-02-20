import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent
]
const MODULES = [
  FlexLayoutModule,
  MaterialModule,
  RouterModule
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule,MODULES],
  exports: [COMPONENTS, MODULES],

})
export class CoreModule { }
