import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let headers = new HttpHeaders({
  'API key': 'b82f28266f01e28f8f6edd9eb28a7555',
  'Shared secret': '5cc937e6870502e557f185d9ed8db94d',
});

@Injectable({
  providedIn: 'root',
})
export class LastFMApiService {
  constructor(private http: HttpClient) {}
  title = 'lastFM-API';

  getAlbumInfo(): Observable<any> {
    return this.http.get<string>(
      'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=b82f28266f01e28f8f6edd9eb28a7555&artist=Cher&album=Believe&format=json',
      {
        headers: headers,
      }
    );
  }
}
