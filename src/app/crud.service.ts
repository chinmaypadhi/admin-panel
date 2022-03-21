import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  constructor(public http: HttpClient) {}

  viewData() {
    let url = 'https://localhost:44361/api/values/getAllData';
    let hader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let option = { headers: hader };

    return this.http.get(url, option);
  }
  createData(form: any,url:string) {
    debugger;
    let hader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let option = { headers: hader };

    return this.http.post(url, form, option);
  }
  // editData(id: number) {
  //   let url = 'https://localhost:44361/api/values/getDataById';
  //   const httppHeaders= {
  //     header: { 'Content-Type': 'application/json' },
  //     params: { 'id': id },
  //   };
  //   return this.http.get(url, httppHeaders);
  // }
  Delete(form: any, url:string) {
       
    let hader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let option = { headers: hader };
    return this.http.post(url, form, option);
  }
}

