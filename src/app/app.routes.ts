import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EpisodesComponent } from './components/pages/episodes/episodes.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CharactersListComponent } from './components/pages/characters/characters-list/characters-list.component';
import { CharactersDetailsComponent } from './components/pages/characters/characters-details/characters-details.component';
import { NotFoundComponent } from './components/pages/notFout/not-found.component';
import { permissionsGuard } from './shared/guards/permissions.guard';
import { NoAuthComponent } from './components/pages/no-auth/no-auth.component';

export const routes: Routes = [
  { path: '', redirectTo: '/character-list', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'episodes', title: 'Episodes', component: EpisodesComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'character-list', component: CharactersListComponent },
  {
    path: 'character-details/:id',
    canActivate: [permissionsGuard],
    component: CharactersDetailsComponent,
  },
  { path: 'no-auth', component: NoAuthComponent },
  { path: '**', component: NotFoundComponent },
];
