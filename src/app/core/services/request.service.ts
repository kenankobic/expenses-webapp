import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';
import { Endpoint } from '../constants/endpoints';
import { AlertService } from './alert.service';
import { MAX_REQUEST_TIME } from '../constants/core';


@Injectable()
export class RequestService {
  constructor(public http: HttpClient, private alertService: AlertService) { }

  private formatErrors(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }

  public handleError(error: HttpErrorResponse) {
    this.alertService.error(error?.error.result ?? 'ERRORS.GENERAL');
  }

  public get<T>(path: string, options: any = { params: new HttpParams() }): Observable<T> {
    return this.createRequest<T>(HttpRequestType.Get, Endpoint.withContextPath(path), null, options);
  }

  public put<T>(path: string, body: T): Observable<T> {
    return this.createRequest<T>(HttpRequestType.Put, Endpoint.withContextPath(path), body);
  }

  public patch<T>(path: string, body: T): Observable<T> {
    return this.createRequest<T>(HttpRequestType.Patch, Endpoint.withContextPath(path), body);
  }

  public post<T>(path: string, body: T): Observable<T> {
    return this.createRequest<T>(HttpRequestType.Post, Endpoint.withContextPath(path), body);
  }

  public remove(path: string): Observable<void> {
    return this.createRequest(HttpRequestType.Delete, Endpoint.withContextPath(path));
  }

  private createRequest<T>(httpRequestType: HttpRequestType, url: string, body: any = {}, params: HttpParams = new HttpParams()): Observable<T> {
    let request = this.determineRequestType(httpRequestType);
    return request(url, body, params)
      .pipe(
        catchError(this.formatErrors),
        timeout(MAX_REQUEST_TIME),
        // map((data: Request<T>) => data.result),
        tap({ error: error => this.handleError(error) })
      );
  }

  private determineRequestType<T>(httpRequestType: HttpRequestType): Function {
    switch (httpRequestType) {
      case HttpRequestType.Get:
        return (url: string, body: T, options: any) => this.http.get<T>(url, options);
      case HttpRequestType.Post:
        return (url: string, body: T) => this.http.post<T>(url, body);
      case HttpRequestType.Put:
        return (url: string, body: T) => this.http.put<T>(url, body);
      case HttpRequestType.Delete:
        return (url: string, body: T) => this.http.delete<T>(url);
      case HttpRequestType.Patch:
        return (url: string, body: T) => this.http.patch<T>(url, body);
    }
  }
}

export enum HttpRequestType {
  Get, Post, Put, Delete, Patch
}