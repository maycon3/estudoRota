import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },

  {path:'home',  component:HomeComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {
    path:'alunos', loadChildren:()=> import('src/app/alunos/alunos.module').then(m=> m.AlunosModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'cursos', loadChildren:()=> import('src/app/curso/curso.module').then(m=> m.CursoModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
