import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private httpClient: HttpClient) { }
  public getAlbums(): void {
    this.httpClient.get('http://localhost:3000/albums')
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        })
  }
}
