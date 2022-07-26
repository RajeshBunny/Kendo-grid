import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }


  getDataFromServer() {
    return this._http.get('../assets/json/mockData.json');
  }
}
