import { NgModule } from '@angular/core';
import { AdviceService } from './advice.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [AdviceService],
  exports: []
})
export class AdviceServiceModule {
}
