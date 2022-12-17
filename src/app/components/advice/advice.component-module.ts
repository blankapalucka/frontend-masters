import { NgModule } from '@angular/core';
import { AdviceComponent } from './advice.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe,
    NgIf
  ],
  declarations: [AdviceComponent],
  providers: [],
  exports: [AdviceComponent]
})
export class AdviceComponentModule {
}
