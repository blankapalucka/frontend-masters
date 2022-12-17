import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceService } from '../../services/advice.service';
import {AdviceModel} from "../../models/advice.model";

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdviceComponent {
  readonly randomAdvice$: Observable<AdviceModel> = this._adviceService.getAdvice();

  constructor(private _adviceService: AdviceService) {
  }
}
