import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { ToastController } from "@ionic/angular";

import { LoadingService } from "@shared/loading/loading.service";
declare const require: any;
const _ = require("lodash");

@Injectable()
export class InterceptorModule implements HttpInterceptor {
  toast;
  constructor(
    private toastController: ToastController,
    private loading: LoadingService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const clonedRequest = req.clone({
      headers: req.headers.set("X-Access-Token", "asdsadasdas" || "")
    });
    const isLoading = req.headers.get("is-loading") === "false" ? false : true;
    if (isLoading) {
      this.loading.present("加载中...");
    }
    return next.handle(clonedRequest).pipe(
      mergeMap((event: any) => {
        if (isLoading) {
          this.loading.dismiss();
        }
        if (event instanceof HttpResponse && event.status === 200) {
          if (event.body && event.body.ERRORCODE !== "0") {
            this.presentToast(event.body.RESULT);
            const eventCopy = _.clone(event);
            eventCopy.event.body.RESULT = [];
            return of(eventCopy);
          }
          return of(event);
        }
        return of(event);
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        const message = this.geErrorMessage(errorResponse);
        if (errorResponse.status === 401) {
            this.presentToast(message ? message :"对不起，未登录授权,请重新登录！" );
        } else if (errorResponse.status === 403) {
          this.presentToast("对不起，你没有此权限！");
        } else if (errorResponse.status === 404) {
          this.presentToast(message ? message : "对不起，你访问的资源不存在！");
        } else if (
          errorResponse.status === 500 ||
          errorResponse.status === 504
        ) {
          this.presentToast(message ? message : "系统不能正常访问，请联系系统管理员。");
        } else {
          this.presentToast(message ? message : "系统不能正常访问，请联系系统管理员。");
        }
        return of(event);
      })
    );
  }
  async presentToast(message) {
    this.toast = await this.toastController.create({
      message: message,
      position: "middle",
      duration: 1000,
      cssClass: "custom-toast"
    });
    this.toast.present();
  }

  geErrorMessage(errorResponse) {
    let message = "";
    if (errorResponse && errorResponse.error) {
      if (errorResponse.error.ERRORCODE)
        message += errorResponse.error.ERRORCODE;
      if (errorResponse.error.RESULT) message += errorResponse.error.RESULT;
    }
    return message;
  }
}
