import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSummernoteModule } from 'ngx-summernote';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSummernoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
