import { NgModule } from '@angular/core';
import { AdviceComponent } from './advice.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe
  ],
  declarations: [AdviceComponent],
  providers: [],
  exports: [AdviceComponent]
})
export class AdviceComponentModule {
}
