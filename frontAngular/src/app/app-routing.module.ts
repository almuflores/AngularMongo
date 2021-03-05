import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component'
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component'
import { PeliculaPreviewComponent } from './components/pelicula-preview/pelicula-preview.component'
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {
    path: 'peliculas',
    component: PeliculasListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'peliculas/new',
    component: PeliculaFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'peliculas/:id',
    component: PeliculaPreviewComponent
  },
  {
    path: 'signin',
    component: SigninComponent 
  }, 
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: '/peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }