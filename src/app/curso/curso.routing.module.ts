import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoComponent } from './curso.component';

const cursoRoutes:Routes = [
    {path:'', component: CursoComponent},
    {path:'naoEncontrado', component:CursoNaoEncontradoComponent},
    {path:':id', component: CursoDetalheComponent}
]

@NgModule({
    imports:[RouterModule.forChild(cursoRoutes)],
    exports:[RouterModule]
})
export class CursoRoutingModule { }