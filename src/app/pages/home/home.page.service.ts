import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl, appKey } from '@env';

@Injectable()
export class HomePageService {
  constructor(private http: HttpClient) { }

  test(): Observable<{}> {
  httpOptions = {
    headers: new HttpHeaders({ 'is-loading': 'false' })
  };
    const url = `${serverUrl.portal}weiboyuiuy/type`;
    return this.http.get(
      `${url}?appKey=${appKey}`, this.httpOptions
    );
  }
  getType(): Observable<{}> {
    const url = `${serverUrl.portal}weibo/type`;
    return this.http.get(
      `${url}?appKey=${appKey}`
    );
  }

  //   return this.http.post(url, params, this.httpOptions);

  getList(queryType: string): Observable<{}> {
    const url = `${serverUrl.portal}weibo/list`;
    return this.http.get(
      `${url}?appKey=${appKey}&queryType=${queryType}`
    );
  }
}
