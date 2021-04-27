import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, reqBody: object) {
    return this.http.post(url,reqBody);
  }

  put(url: string, reqBody: object) {
    return this.http.put(url, reqBody);
  }

  delete(url: string) {
    return this.http.delete(url);
  }
}
