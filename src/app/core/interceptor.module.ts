

import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
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
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorModule implements HttpInterceptor {
    requestsNum = 0;
    constructor(private injector: Injector) { }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

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

        const clonedRequest = req.clone({ headers: req.headers.set('X-Access-Token', 'asdsadasdas' || '') });
        return next.handle(clonedRequest).pipe(
            mergeMap((event: any) => {
                if (event instanceof HttpResponse && event.status === 200) {

                    if (
                        event.body &&
                        (event.body.status === 700 ||
                            event.body.status === 800 ||
                            event.body.status === 500)
                    ) {
                        return of(event.body.message);
                    }
                    return of(event);
                }

                return of(event);
            }),
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    // this.goTo('/login');
                    if (err.error && err.error.msg) {
                        console.log(err.error.msg);
                    } else {
                        console.log('对不起，未登录授权,请重新登录！');
                    }
                } else if (err.status === 403) {
                    console.log('对不起，你没有此权限！');
                    // this.goTo('/403');
                } else if (err.status === 404) {
                    console.log('对不起，你访问的资源不存在！');
                    // this.goTo('/404');
                } else if (err.status === 500 || err.status === 504) {
                    console.log('系统不能正常访问，请联系系统管理员。');
                    // this.goTo('/500');
                } else {
                    console.log('系统不能正常访问 status:' + err.status);
                    // this.goTo('/500');
                }
                return of(event);
            })
        );
    }
}
