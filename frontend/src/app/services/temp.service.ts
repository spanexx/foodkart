import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {
  public tempService = new Subject<string>();
  constructor() { }

  sendTempData(data: string){
    this.tempService.next(data);
  }
}
