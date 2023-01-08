import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {routerReducer} from '@ngrx/router-store';
import {TokenInterceptor} from "./http-inerceptor/http-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot(),],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }]
})
export class CoreModule {
}
