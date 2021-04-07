import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit,OnDestroy {

  id: number;
  inscricao: Subscription; 
  curso: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((param:any)=>{
        this.id = param.id;
        this.curso = this.cursosService.getCurso(this.id);
        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);
        }
    });
  }
  
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
