import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina:number;
  inscricao: Subscription;

  constructor(
    private cursosService:CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }
    
    ngOnInit(): void {
      this.cursos = this.cursosService.getCursos();
      this.inscricao = this.activatedRoute.queryParams.subscribe((query:any)=>{
        this.pagina = query.pagina
      });
    }

    incrementarPagina(){
      this.router.navigate(['/cursos'], {queryParams:{pagina:++this.pagina}});
    }
    
    ngOnDestroy(): void {
     this.inscricao.unsubscribe();
    }
}
