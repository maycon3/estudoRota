import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosGuard } from './guards/alunos.guards';
import { AlunosDeactivateGuard } from './guards/alunos.deactivate.guard';
import { AlunosDetalhesResolver } from './guards/alunos-detalhes.resolve';

@NgModule({
    declarations:[
        AlunosComponent,
        AlunosDetalhesComponent,
        AlunosFormsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    providers:[
        AlunosService,
        AlunosGuard,
        AlunosDeactivateGuard,
        AlunosDetalhesResolver
    ]
})
export class AlunosModule { }