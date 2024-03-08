import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

const COMPONENTS = [
  MessagesComponent,
  PageNotFoundComponent,
  LoadingComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if (parentModule){
      throw new Error(
        'CoreModule has already been loaded'
      );
    }
  }
 }
