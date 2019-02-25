import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serverUrl, appKey } from '@env';

@Injectable()
export class HomePageService {
  constructor(private http: HttpClient) { }
  getType(): Observable<{}> {
    const refreshUserMenuAPI = `${serverUrl.portal}weibo/type`;
    return this.http.get(
      `${refreshUserMenuAPI}?appKey=${appKey}`
    );
  }

  getList(queryType: string): Observable<{}> {
    const refreshUserMenuAPI = `${serverUrl.portal}weibo/list`;
    return this.http.get(
      `${refreshUserMenuAPI}?appKey=${appKey}&queryType=${queryType}`
    );
  }
}
