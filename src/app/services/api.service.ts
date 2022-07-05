import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LOGIN_ENDPOINT } from '@enpoints';
import { LoginApiBody } from '@interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.api_base_url;
  constructor(private http: HttpClient) { }

  login(body: LoginApiBody) {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   // 'Access-Control-Allow-Credentials': 'true'
    // })
    return this.http.post(this.url + LOGIN_ENDPOINT, body)
  }
}
