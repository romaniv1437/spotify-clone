import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylist from './playlists.reducer'

export const selectWebPortalState = createFeatureSelector<fromPlaylist.State>(
  fromPlaylist.playlistsFeatureKey
);

export const selectPlaylists = createSelector(
  selectWebPortalState,
  (state) => state.playlists
);

