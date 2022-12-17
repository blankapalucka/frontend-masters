import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdviceComponentModule} from "./components/advice/advice.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdviceComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
