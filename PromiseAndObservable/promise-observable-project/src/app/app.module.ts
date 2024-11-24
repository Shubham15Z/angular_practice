import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PromisedataComponent } from './components/promisedata/promisedata.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    PromisedataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
