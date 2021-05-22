import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getBlogList(
    ordering:string,
    search?:string
  ):Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering', ordering);
    if(search){
      params = new HttpParams().set('ordering', ordering).set('search',search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params: params,
    });
  }
}
