import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Playlist} from "../Interfaces/PlaylistInterface";
import {loadPlaylists} from "../store/playlists.actions";
import {selectPlaylists} from "../store/playlists.selectors";

@Injectable({
  providedIn: 'root'
})
export class PlaylistsFacade {

  constructor(private store$: Store) { }

  playlists$: Observable<Playlist[]> = this.store$.select(selectPlaylists);

  loadPlaylistsBySearchString(search: string): void {
    this.store$.dispatch(loadPlaylists({name: search}))
  }
}
