import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdviceComponentModule} from "./components/advice/advice.component-module";
import {AdviceServiceModule} from "./services/advice.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdviceComponentModule,
    AdviceServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
