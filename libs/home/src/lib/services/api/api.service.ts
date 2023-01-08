import {Injectable} from '@angular/core';
import {Playlist} from "../../Interfaces/PlaylistInterface";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getPlaylistsBySearchString(name: string): Observable<Playlist[]> {
    return this.http.get('https://spotify81.p.rapidapi.com/search', {
      params: {
        q: name,
        type: 'playlists',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      }
    }).pipe(
      map((response: any) => response.playlists.items.map((playlist: any) => ({
        uri: playlist.data.uri,
        name: playlist.data.name,
        description: playlist.data.description,
        image: playlist.data.images.items[0].sources[0].url,
        owner: playlist.data.owner
      })))
    )
  }
}
