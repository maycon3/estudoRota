import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso.routing.module';
import { CursosService } from './cursos.service';
import { CursosGuard } from './guards/curso.guard';

@NgModule({
    declarations:[
        CursoComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports:[
        CommonModule,
        CursoRoutingModule
    ],
    providers:[
        CursosService,
        CursosGuard
    ]
})
export class CursoModule { }