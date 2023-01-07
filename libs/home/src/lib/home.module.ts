import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SideBarComponent } from './components/ui-kit/side-bar/side-bar.component';
import { HeaderComponent } from './components/ui-kit/header/header.component';
import { CoreModule } from 'core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './components/playlists/playlists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
    children: [
      {
        path: '',
        component: PlaylistsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent,
    HeaderComponent,
    PlaylistsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
