import { createAction, props } from '@ngrx/store';
import {Playlist} from "../Interfaces/PlaylistInterface";

export const loadPlaylists = createAction(
  '[Playlists] Load Playlists',
props<{ name: any }>()
);

export const loadPlaylistsSuccess = createAction(
  '[Playlists] Load Playlists Success',
  props<{ data: Playlist[] }>()
);

export const loadPlaylistsFailure = createAction(
  '[Playlists] Load Playlists Failure',
  props<{ error: any }>()
);
