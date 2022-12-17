import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {AdviceModel} from "../models/advice.model";

@Injectable()
export class AdviceService {
  constructor(private _httpClient: HttpClient) {
  }

  getAdvice(): Observable<AdviceModel> {
    return this._httpClient.get<AdviceModel>('https://api.adviceslip.com/advice');
  }
}
