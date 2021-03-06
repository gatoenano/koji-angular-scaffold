// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// configs
import { API, APP } from '../config';


@Injectable()
export class SampleService {
  constructor(private http: HttpClient) { }

  /**
   * Gets data from API
   * @returns: Observable - array of any
   */
  getData(): Observable<any> {
    return this.http.get(API.endpoints.sample, { headers: API.headers.get() }).pipe(
      map((data: any) => data),
      catchError(error => throwError(error || APP.errors.msg_generic))
    );
  }
}
