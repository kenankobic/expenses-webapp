import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {
  defaultTime = 3000;
  constructor(
    private toastr: ToastrService
  ) { }
  public success(message: string, time?: number): void {
    if (time == null)
      if (message.length < 100) time = 3000;
      else time = message.length * 40;

    this.toastr.success(message, '', {
      timeOut: time,
    });
  }
  public error(message: any, json: boolean = false, time?: number): void {
    let detail = '';
    try {
      if (message && message.error && message.error.error_description)
        detail = message.error.error_description;
      else
        detail = (
          json ? JSON.parse(message._body).error_description : message
        ).toString();

      if (time == null)
        if (detail.length < 60) time = 8000;
        else time = 20000;
    } catch (err) {
      detail = 'ERRORS.GENERAL';
    }

    this.toastr.error(detail, '', {
      timeOut: time || this.defaultTime,
    });
  }
  // public successCustomMessage(entireMessage: string, time?: number): void {
  //   if (time == null) 
  //     if (entireMessage.length < 100) time = 3000;
  //     else time = entireMessage.length * 40;

  //   this.toastr.success(entireMessage, '', {
  //     timeOut: time || this.defaultTime,
  //   });
  // }
}
