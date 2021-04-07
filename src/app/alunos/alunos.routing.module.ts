import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalhesResolver } from './guards/alunos-detalhes.resolve';
import { AlunosDeactivateGuard } from './guards/alunos.deactivate.guard';
import { AlunosGuard } from './guards/alunos.guards';


const alunosRoutes:Routes = [
    {
        path:'', component:AlunosComponent,
        canActivateChild:[AlunosGuard],
        children:[
            {path:'novo', component:AlunosFormsComponent},
            {path:':id', component:AlunosDetalhesComponent, resolve:{aluno: AlunosDetalhesResolver} },
            {path:':id/editar', component:AlunosFormsComponent, canDeactivate:[AlunosDeactivateGuard]}
        ],
    },
    
]

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule { }