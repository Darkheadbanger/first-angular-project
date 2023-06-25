import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { MusicData } from './models/music-data.models';

@Injectable({
  providedIn: 'root',
})
export class DiscogsAPI {
  constructor(private http: HttpClient) {}
  public title = 'lastFM-API';

  getAlbumInfo(): Observable<MusicData> {
    return this.http.get<MusicData>(
      'https://api.discogs.com/artists/18839'
    );
  }
}
