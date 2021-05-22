import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(
        req:HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        req=req.clone({
            setHeaders:{
                "x-rapidapi-key": "4b1c7a3c8dmshf82a8c23a6ef844p111670jsnca874fa2cd8e",
	            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            },
            setParams:{
                key:'4b1c7a3c8dmshf82a8c23a6ef844p111670jsnca874fa2cd8e'
            }
        });
        return next.handle(req);
    }
}