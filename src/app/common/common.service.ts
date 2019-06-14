import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};
const baseUrl = "http://192.168.0.2:88";
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { 
    var params = {id:'test',pwd:'test'};
    console.log(this.makeQuery(params));
  }

  private makeQuery(params):string{
    var query = '?';
    for(var key in params){
      query += key + '=' + params[key] +'&';
    }
    return query;
  }
  get<T>(url,params?){
    url = baseUrl + url;
    return this._http.get(url);
  }
  
  post(url,params){
    url = baseUrl + url;
    return this._http.post(url,params,httpOptions);
  }
}
