import { Component, OnInit } from '@angular/core';
import {PlaylistsFacade} from "../../facades/playlists.facade";
import {Playlist} from "../../Interfaces/PlaylistInterface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
})
export class PlaylistsComponent implements OnInit {

  public playlists$: Observable<Playlist[]> = new Observable<Playlist[]>()
  constructor(private playlistsFacade: PlaylistsFacade) {}

  ngOnInit(): void {
    this.playlists$ = this.playlistsFacade.playlists$;

    this.playlistsFacade.loadPlaylistsBySearchString('focus')
  }
}
