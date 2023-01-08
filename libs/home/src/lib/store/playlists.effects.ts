import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, switchMap} from 'rxjs/operators';
import {Observable, EMPTY, of} from 'rxjs';
import * as PlaylistsActions from './playlists.actions';
import {ApiService} from "../services/api/api.service";


@Injectable()
export class PlaylistsEffects {

  loadPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.loadPlaylists),
      switchMap((action) => this.apiService.getPlaylistsBySearchString(action.name).pipe(
          map((data) => PlaylistsActions.loadPlaylistsSuccess({data})),
          catchError((error) => of(PlaylistsActions.loadPlaylistsFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
