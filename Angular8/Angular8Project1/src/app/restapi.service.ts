import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()   //
export class RESTAPIService {
    constructor(private http: HttpClient) {

    }
    getData() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }

}