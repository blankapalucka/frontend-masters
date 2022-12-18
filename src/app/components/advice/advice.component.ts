import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {AdviceModel} from '../../models/advice.model';
import {AdviceService} from '../../services/advice.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdviceComponent {
  randomAdvice$: Observable<AdviceModel> = this._adviceService.getAdvice();

  constructor(private _adviceService: AdviceService) {
  }

  getNewAdvice(): void {
    this.randomAdvice$ = this._adviceService.getAdvice();
  }
}
