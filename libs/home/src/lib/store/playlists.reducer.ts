import {Action, createReducer, on} from '@ngrx/store';
import {Playlist} from "../Interfaces/PlaylistInterface";
import * as playlistActions from "./playlists.actions"
import {loadPlaylistsFailure} from "./playlists.actions";


export const playlistsFeatureKey = 'playlists';

export interface State {
  playlists: Playlist[];
  isLoading: boolean;
  error: string
}

export const initialState: State = {
  playlists: [],
  isLoading: false,
  error: ''
};

export const reducer = createReducer(
  initialState,

  on(playlistActions.loadPlaylists, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(playlistActions.loadPlaylistsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      playlists: action.data
    }
  }),
  on(playlistActions.loadPlaylistsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
  }),
);
